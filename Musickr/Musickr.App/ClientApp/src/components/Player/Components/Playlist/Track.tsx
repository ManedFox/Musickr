import React from 'react';
import {Box, Flex, VStack} from '@chakra-ui/react';
import {useTranslation} from 'react-i18next';
import type {Track as TrackType} from '../../../Utils/Hooks/useGetTracks';
import Album from './Album';
import Title from './Title';
import GenreTag from "./GenreTag";

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
    <Box
      aspectRatio='3.8'
      w='90%'
    >
      <Flex
        h='76%'
        w='100%'
      >
        <Album
          artworkUrl={track.artworkUrl} 
          index={index} 
          isSelected={isSelected} 
          setCurrentTrackIndex={setCurrentTrackIndex}
        />
        <VStack
          h='80%'
          w='100%'
          spacing='0'
          align='left'
        >
          <Flex
            w='100%'
            h='15%'
            alignItems='center'
            paddingLeft='5%'
          >
            <Title
              isArtist
              label={track.author}
              link={track.url}
            />
          </Flex>
          <Flex
            w='100%'
            h='50%'
            alignItems='center'
            paddingLeft='5%'
          >
            <Title
              label={track.title}
              link={track.url}
            />
          </Flex>
          <Flex
            w='100%'
            h='10%'
            paddingLeft='5%'
          >
            <GenreTag label={track.genre}/>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
  
};

export default React.memo(Track);