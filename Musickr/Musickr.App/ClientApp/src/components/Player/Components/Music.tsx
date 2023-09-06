import React from "react";
import {Box, Flex, HStack, VStack} from "@chakra-ui/react";
import {AtSignIcon, ChatIcon, RepeatIcon, StarIcon, ViewIcon} from "@chakra-ui/icons";
import Album from "./Album";
import Artist from "./Artist";
import Title from "./Title";
import Socials from "./Socials";

type MusicProps = {
  lang: {
    [key: string]: string
  };
  music: {
    image?:     string,     // link to the music image (should be a square picture)
    link?:      string,      // link to the music page
    title:      string,
    artist:     string,
    duration?:  number,  // duration already converted to text
    plays?:     number,
    likes?:     number,
    reposts?:   number,
    comments?:  number,
    followers?: number,
    tags?:      string[]     // genre tags
  }
};

const Music = ({
 lang,
 music
}: MusicProps) => {

  return (
    <Box aspectRatio="3.8">
      <Flex h='76%' w='100%' alignItems='center'>
        <Album label={lang.play} image={music.image} />
        <VStack h="90%" w="100%" spacing='0' align='left'>
          <Flex w='100%' h='15%' alignItems='center' paddingLeft='5%'>
            <Artist label={music.artist} link={music.link}>
              <Socials local={lang.local} icon={AtSignIcon} number={music.followers} label={lang.plays}/>
            </Artist>
          </Flex>
          <Flex w='100%' h='50%' alignItems='center' paddingLeft='5%'>
            <Title label={music.title} link={music.link} />
          </Flex>
          <HStack h="35%" spacing='5px' paddingLeft={'5%'}>
            <Socials local={lang.local} icon={ViewIcon} number={music.plays} label={lang.plays}/>
            <Socials local={lang.local} icon={StarIcon} number={music.likes} label={lang.likes} link={music.link?music.link+'/likes':null}/>
            <Socials local={lang.local} icon={RepeatIcon} number={music.reposts} label={lang.reposts} link={music.link?music.link+'/reposts':null}/>
            <Socials local={lang.local} icon={ChatIcon} number={music.comments} label={lang.comments} link={music.link?music.link+'/comments':null}/>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
  
};

export default React.memo(Music);