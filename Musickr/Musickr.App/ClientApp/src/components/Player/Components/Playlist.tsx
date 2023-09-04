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
import Socials from "./Socials";
import Export from "./Export";
import Music from "./Music";

type PlaylistProps = {
  defaultValue?: string;
  onChange: (value: string) => void;
  lang: {
    [key: string]: string
  };
  playlist: {
    image?:    string, // link to the music image (should be a square picture)
    link?:     string, // link to the music page
    title:     string,
    artist:    string,
    duration?: number, // duration already converted to text
    plays?:    number,
    likes?:    number,
    reposts?:  number,
    comments?: number,
    tags?:     string[]// genre tags
  }[]
};

const Playlist = ({defaultValue="", onChange, lang, playlist}: PlaylistProps) => {


  const [searchContent, setSearchContent] = useState(defaultValue);
  const [searchContentDebounced, setSearchContentDebounced] = useState("");

  const handleInput = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    setSearchContent(changeEvent.target.value);
  };

  const [, cancel] = useDebounce(
    () => {
      setSearchContentDebounced(searchContent);
    },
    500,
    [searchContent]
  );

  const { isLoading, data } = useGetUsersAndPlaces(searchContentDebounced);
  
  return (
    <VStack w="100%" minW="300px" spacing="0" p="5%">
      <Heading variant='playlist'>{lang.musickr}</Heading>
      <SearchBar onChange={onChange} defaultValue={defaultValue}/> {/* need to modify this component to allow styling */}
      <Divider/>
      <VStack w="100%" spacing="0">
        {playlist.map((music) => (
          <Music lang={lang} music={music}/>
        ))}
      </VStack>
      <Divider/>
      <Export label={lang.export}/>
    </VStack>
  );
};

export default React.memo(Playlist);