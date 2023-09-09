import React from "react";
import {Box, Image, Tooltip} from "@chakra-ui/react";

type AlbumProps = {
  image?: string // link to the music image (should be a square picture)
};

const Album = ({
  image="https://media.istockphoto.com/id/1175435360/vector/music-note-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=R7s6RR849L57bv_c7jMIFRW4H87-FjLB8sqZ08mN0OU="
}: AlbumProps) => {

  return (    
    <Tooltip
      label={"Écouter"/*i18n*/}
      openDelay={500}
    >
      <Box
        as='button'
        h='100%'
        aspectRatio="1"
        transition="100ms"
        _hover={{
          aspectRatio: "1.25",
          '.vinyl': {
            left:'20%'
          },
          '.album': {
            filter: 'brightness(90%)',
            boxShadow: "10px 0 5px -5px black"
          },
          '.play': {
            filter: 'opacity(70%)',
            left:"20.83%"
          }
        }}
        _active={{
          '.play': {
            transform: 'scale(0.9)',
          }
        }}
      >
        <Image
          className={"vinyl"}
          h="100%"
          aspectRatio="1"
          transition="150ms"
          position="relative"
          left="0%"
          src='https://publicdomainvectors.org/download.php?file=cafuego_45_rpm.svg.svg'
        />
        <Image
          className={"album"}
          h="100%"
          aspectRatio="1"
          position="relative"
          top="-100%"
          filter="brightness(85%)"
          transition="150ms"
          src={image}
        />
        <Image
          className={"play"}
          h="50%"
          aspectRatio="1"
          position="relative"
          top="-175%"
          left="25%"
          filter="opacity(0%)"
          transition="150ms"
          src="https://upload.wikimedia.org/wikipedia/commons/1/10/Apple_system_icon_play.svg"
        />
      </Box>
    </Tooltip>
  );
  
};

export default React.memo(Album);