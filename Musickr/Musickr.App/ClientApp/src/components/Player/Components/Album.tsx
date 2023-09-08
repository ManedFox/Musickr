import React from "react";
import {Box, Image} from "@chakra-ui/react";

type AlbumProps = {
  image?: string     // link to the music image (should be a square picture)
};

const Album = ({
  image="https://www.claudejardin.com/wp-content/themes/soundcheck/images/default-album-artwork.png"
}: AlbumProps) => {

  return (
    <Box
      className='test'
      h='100%'
      aspectRatio="1"
      transition="100ms"
      sx={{
        '.test': {
          aspectRatio: "1.5",
          paddingLeft:"20%",
          borderWidth:"10px"
        },
      }}
    >
      <Box
        className='test2'
        h='100%'
        aspectRatio="1"
        transition="100ms"
        bgColor="red"
        _hover={{
        }}
      >
        <Image
          h="100%"
          aspectRatio="1"
          src='https://images.freeimages.com/fic/images/icons/2315/default_icon/256/media_vinyl_78.png'
        />
      </Box>

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