import React from "react";
import {Box, Flex, HStack, VStack} from "@chakra-ui/react";
import Album from "./Album";
import Title from "./Title";
import SocialTag from "./SocialTag";
import type {Track as TrackType} from "../../Utils/Hooks/useGetTracks";
import {BsFillChatLeftFill, BsFillHeartFill, BsFillPeopleFill, BsFillPlayFill, BsRepeat} from "react-icons/bs";
import {useTranslation} from "react-i18next";

type TrackProps = {
  track: TrackType;
  index: number;
  isSelected: boolean;
  setCurrentTrackIndex: (value: number) => void;
};

const Track = ({
  track,
  index,
  isSelected,
  setCurrentTrackIndex
}: TrackProps) => {

  const { t } = useTranslation();

  return (
    <Box aspectRatio="3.8" w='90%'>
      <Flex h='76%' w='100%' alignItems='center'>
        <Album 
          image={track.artworkUrl} 
          index={index} 
          isSelected={isSelected} 
          setCurrentTrackIndex={setCurrentTrackIndex}
        />
        <VStack h="90%" w="100%" spacing='0' align='left'>
          <Flex w='100%' h='15%' alignItems='center' paddingLeft='5%'>
            <Title isArtist label={track.author} link={track.url} />
          </Flex>
          <Flex w='100%' h='50%' alignItems='center' paddingLeft='5%'>
            <Title label={track.title} link={track.url} />
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
  
};

export default React.memo(Track);