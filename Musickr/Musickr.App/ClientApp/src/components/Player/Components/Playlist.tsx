import React, {ChangeEvent, ReactNode, useCallback, useRef, useState} from "react";
import SearchBar from "../../Search/Components/SearchBar";
import {
  AspectRatio,
  Button, Divider,
  Heading,
  HStack, Icon,
  Link,
  Image,
  Modal, ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps, Square, Text,
  useDisclosure,
  VStack,
  Box,
  Flex, Center, useDimensions, TagLabel, Tag, TagRightIcon, Tooltip, IconProps, ComponentWithAs
} from "@chakra-ui/react";
import {
  ChatIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  PhoneIcon,
  RepeatIcon,
  StarIcon,
  ViewIcon
} from "@chakra-ui/icons";
import {useDebounce} from "react-use";
import useGetUsersAndPlaces from "../../Utils/Hooks/useGetUsersAndPlaces";
import {AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList} from "@choc-ui/chakra-autocomplete";
import {MdPlace, MdSettings} from "react-icons/md";
import {createSearchParams, useNavigate} from "react-router-dom";
import PageContent from "../../Utils/PageContent";
import {stringify} from "../../Utils/DisplayTools";


type SocialsProps = {
  label:   string,
  number?: number,
  icon:    ComponentWithAs<"svg", IconProps>
}

const Socials = ({label, number, icon}: SocialsProps) => {
  return (
    number?
      <Tooltip label={label}>
        <Tag>
          <TagRightIcon as={icon}/>
          <TagLabel>{stringify(number)}</TagLabel>
        </Tag>
      </Tooltip>
    :
      <></>
  )
}



type PlaylistProps = {
  l:string;
  playlist: {
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
  }[]
};

// 380 - 75
const Playlist = ({l="en",playlist}: PlaylistProps) => {

  const navigate = useNavigate();
  const {isOpen, onClose, onOpen} = useDisclosure();

  const onSearchBarChange = useCallback((value: string) => {
      const params = {place: value};
      navigate({
        pathname: "/player",
        search: `?${createSearchParams(params)}`
      })
    },
    [navigate]);

  const elementRef = useRef();
  const dimensions = useDimensions(elementRef);


  let lang = require(`../../Utils/lang.json`)[l];
  
  return (
    <VStack
      w="100%"
      spacing="0"
      p="5%"
    >

      <Heading size="xl">
        Musickr
      </Heading>

      <SearchBar onChange={onSearchBarChange}/>

      <Divider/>

      <VStack
        w="100%"
        spacing="0"
      >

        {playlist.map((music) => (

          <Center w='100%' aspectRatio="5/1" bg={"blue.100"}>

            <HStack h='76%' w='96.2%' spacing="0" bg={"red.100"}>
              <Box
                h='100%'
                aspectRatio="1"
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
                  src={music.image ? music.image : 'https://www.claudejardin.com/wp-content/themes/soundcheck/images/default-album-artwork.png'}
                />
              </Box>
              <VStack h="100%">
                <Text h="3%">{music.title}</Text>
                <Text h="3%">{music.artist}</Text>
                <HStack h="30%">
                  <Socials label={music.plays+" "+lang.plays} icon={ViewIcon} number={music.plays}/>
                  <Socials label={music.likes+" "+lang.likes} icon={StarIcon} number={music.likes}/>
                  <Socials label={music.reposts+" "+lang.reposts} icon={RepeatIcon} number={music.reposts}/>
                  <Socials label={music.comments+" "+lang.comments} icon={ChatIcon} number={music.comments}/>
                </HStack>
              </VStack>
            </HStack>

          </Center>
        ))}

      </VStack>

      <Divider/>

      <Button
        rightIcon={<ExternalLinkIcon/>}
        colorScheme='teal'
        variant='outline'
      >
        Export Playlist
      </Button>

    </VStack>
  );
};

export default React.memo(Playlist);