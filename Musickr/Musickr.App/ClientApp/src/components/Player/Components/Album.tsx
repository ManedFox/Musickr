import React from "react";
import {Box, Center, Image, Tooltip} from "@chakra-ui/react";
import {FaPlay, FaRecordVinyl} from "react-icons/fa";
import {GiMusicalNotes} from "react-icons/gi";
import {useTranslation} from "react-i18next";

type AlbumProps = {
  image?: string;
  index: number;
  isSelected: boolean;
  setCurrentTrackIndex: (value: number) => void;
};

const Album = ({
  image,
  index,
  isSelected,
  setCurrentTrackIndex
}: AlbumProps) => {
  
  const { t } = useTranslation();

  const play = () => setCurrentTrackIndex(index);

  return (    
    <Tooltip
      label={t("playerPage.playlist.play")}
      openDelay={500}
    >
      <Box
        as='button'
        onClick={play}
        h='100%'
        aspectRatio={isSelected?"1.15":"1"}
        transition="100ms"
        _hover={{
          aspectRatio: "1.15",
          '.vinyl': {
            left:'20%'
          },
          '.album': {
            filter: 'brightness(90%)',
            boxShadow: "10px 0 10px -10px black"
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
          as={FaRecordVinyl}
          h="90%"
          w="90%"
          top="-5%"
          transition="150ms"
          position="relative"
          left={isSelected?"20%":"0%"}
        />
        {image?
          <Image
            className={"album"}
            boxShadow={isSelected?"10px 0 10px -10px black":""}
            src={image}
            h="100%"
            aspectRatio="1"
            position="relative"
            top="-100%"
            filter="brightness(85%)"
            transition="150ms"
          />
        : 
          <Center
            className={"album"}
            boxShadow={isSelected?"10px 0 10px -10px black":""}
            h="100%"
            aspectRatio="1"
            bg="white"
            filter="brightness(85%)"
            position="relative"
            top="-100%"
            transition="150ms"
          >
            <Image
              as={GiMusicalNotes}
              h="50%"
              w="50%"
            />
          </Center>
        }
        <Image
          className={"play"}
          as={FaPlay}
          h="50%"
          w="50%"
          position="relative"
          top="-175%"
          left="25%"
          filter="opacity(0%)"
          transition="150ms"
        />
      </Box>
    </Tooltip>
  );
  
};

export default React.memo(Album);