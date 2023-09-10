import React from "react";
import {Box, Flex, HStack, VStack} from "@chakra-ui/react";
import {AtSignIcon, ChatIcon, RepeatIcon, StarIcon, ViewIcon} from "@chakra-ui/icons";
import Album from "./Album";
import Title from "./Title";
import SocialTag from "./SocialTag";
import {BsFillChatLeftFill, BsFillHeartFill, BsFillPeopleFill, BsFillPlayFill, BsRepeat} from "react-icons/bs";

type TrackProps = {
  track: {
    author:     string,
    title:      string,
    url?:       string,
    image?:     string, // link to the music image (should be a square picture)
    duration?:  number,
    plays?:     number,
    likes?:     number,
    reposts?:   number,
    comments?:  number,
    followers?: number,
    tags?:      string[] // music genre tags
  }
};

const Track = ({
 track
}: TrackProps) => {

  return (
    <Box aspectRatio="3.8" w='90%'>
      <Flex h='76%' w='100%' alignItems='center'>
        <Album image={track.image} />
        <VStack h="90%" w="100%" spacing='0' align='left'>
          <Flex w='100%' h='15%' alignItems='center' paddingLeft='5%'>
            <Title isArtist label={track.author} link={track.url} />
          </Flex>
          <Flex w='100%' h='50%' alignItems='center' paddingLeft='5%'>
            <Title label={track.title} link={track.url} />
          </Flex>
          <HStack h="35%" spacing='5px' paddingLeft={'5%'}>
            <SocialTag icon={BsFillPlayFill} number={track.plays} label={"écoutes"/*i18n*/}/>
            <SocialTag icon={BsFillHeartFill} number={track.likes} label={"mentions j'aime"/*i18n*/} link={track.url?track.url+'/likes':null}/>
            <SocialTag icon={BsRepeat} number={track.reposts} label={"reposts"/*i18n*/} link={track.url?track.url+'/reposts':null}/>
            <SocialTag icon={BsFillChatLeftFill} number={track.comments} label={"commentaires"/*i18n*/} link={track.url?track.url+'/comments':null}/>
            <SocialTag icon={BsFillPeopleFill} number={track.followers} label={"abonnés"/*i18n*/} link={track.url?track.url.split('/').slice(0, -1).join('/')+'/followers':null}/>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
  
};

export default React.memo(Track);