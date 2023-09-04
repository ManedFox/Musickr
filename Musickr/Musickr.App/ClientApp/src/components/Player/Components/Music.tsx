import {createSearchParams, useNavigate} from "react-router-dom";
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  useDimensions,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import React, {useCallback, useRef} from "react";
import SearchBar from "../../Search/Components/SearchBar";
import Socials from "./Socials";
import {ChatIcon, RepeatIcon, StarIcon, ViewIcon} from "@chakra-ui/icons";
import Export from "./Export";
import Album from "./Album";

type MusicProps = {
  lang:{[key: string]: string};
  music: {
    image?: string,     // link to the music image (should be a square picture)
    link?: string,      // link to the music page
    title: string,
    artist: string,
    duration?: number,  // duration already converted to text
    plays?: number,
    likes?: number,
    reposts?: number,
    comments?: number,
    tags?: string[]     // genre tags
  }
};

const Music = ({lang,music}: MusicProps) => {

  return (
      <Center
        w='100%'
        aspectRatio="5/1"
        bg={"blue.100"}>

        <HStack h='76%' w='96.2%' spacing="0" bg={"red.100"}>
          <Album label={lang.play} image={music.image} />
          <VStack h="100%">
            <Text fontSize="3%" variant='artist'>{music.title}</Text>
            <Text h="3%">{music.artist}</Text>
            <HStack h="30%">
              <Socials local={lang.local} icon={ViewIcon} number={music.plays} label={lang.plays}/>
              <Socials local={lang.local} icon={StarIcon} number={music.likes} label={lang.likes}/>
              <Socials local={lang.local} icon={RepeatIcon} number={music.reposts} label={lang.reposts}/>
              <Socials local={lang.local} icon={ChatIcon} number={music.comments} label={lang.comments}/>
            </HStack>
          </VStack>
        </HStack>

      </Center>
    
    );
};

export default React.memo(Music);