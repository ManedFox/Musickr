import React from "react";
import {Box, Flex, HStack, VStack} from "@chakra-ui/react";
import {AtSignIcon, ChatIcon, RepeatIcon, StarIcon, ViewIcon} from "@chakra-ui/icons";
import Album from "./Album";
import Artist from "./Artist";
import Title from "./Title";
import SocialTag from "./SocialTag";

type MusicProps = {
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
 music
}: MusicProps) => {

  return (
    <Box aspectRatio="3.8">
      <Flex h='76%' w='100%' alignItems='center'>
        <Album image={music.image} />
        <VStack h="90%" w="100%" spacing='0' align='left'>
          <Flex w='100%' h='15%' alignItems='center' paddingLeft='5%'>
            <Artist label={music.artist} link={music.link}>
              <SocialTag icon={AtSignIcon} number={music.followers} label={"abonnés"/*i18n*/}/>
            </Artist>
          </Flex>
          <Flex w='100%' h='50%' alignItems='center' paddingLeft='5%'>
            <Title label={music.title} link={music.link} />
          </Flex>
          <HStack h="35%" spacing='5px' paddingLeft={'5%'}>
            <SocialTag icon={ViewIcon} number={music.plays} label={"écoutes"/*i18n*/}/>
            <SocialTag icon={StarIcon} number={music.likes} label={"mentions j'aime"/*i18n*/} link={music.link?music.link+'/likes':null}/>
            <SocialTag icon={RepeatIcon} number={music.reposts} label={"reposts"/*i18n*/} link={music.link?music.link+'/reposts':null}/>
            <SocialTag icon={ChatIcon} number={music.comments} label={"commentaires"/*i18n*/} link={music.link?music.link+'/comments':null}/>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
  
};

export default React.memo(Music);