import React from "react";
import {Box, Center, HStack, Image, Text, VStack} from "@chakra-ui/react";
import Socials from "./Socials";
import {ChatIcon, RepeatIcon, StarIcon, ViewIcon} from "@chakra-ui/icons";

type AlbumProps = {
  label: string;
  image?: string     // link to the music image (should be a square picture)
};

const Album = ({label,image="https://www.claudejardin.com/wp-content/themes/soundcheck/images/default-album-artwork.png"}: AlbumProps) => {

  return (
    <Box
      h='100%'
      aspectRatio="1"
      transition="100ms"
      _hover={{
        aspectRatio: "1.2/1"
      }}
    >
      <Image
        h="100%"
        aspectRatio="1"
        left="0px"
        _hover={{
          left: "50px"
          //animationDuration:"4s"
        }}
        src='https://images.freeimages.com/fic/images/icons/2315/default_icon/256/media_vinyl_78.png'
      />

      <Image
        h="100%"
        aspectRatio="1"
        position="relative"
        top="-100%"
        src={image}
      />
    </Box>
  );
  
};

export default React.memo(Album);