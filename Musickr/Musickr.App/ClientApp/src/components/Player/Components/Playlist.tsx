import React, {ChangeEvent, useState} from "react";
import {useDebounce} from "react-use";
import {Button, Divider, Heading, VStack} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import SearchBar from "../../Search/Components/SearchBar";
import Music from "./Music";

type PlaylistProps = {
  defaultValue?: string;
  onChange:      (value: string) => void;
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

const Playlist = ({
  defaultValue="",
  onChange,
  lang,
  playlist
}: PlaylistProps) => {

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
  
  return (
    <VStack w="100%" minW="300px" spacing="0" p="5%" margin="0" fontSize="100%">
      <Heading variant='playlist'>{lang.musickr}</Heading>
      <SearchBar onChange={onChange} defaultValue={defaultValue}/> {/* need to modify this component to allow styling */}
      <Divider/>
      <VStack w="100%" spacing="0">
        {playlist.map((music) => (
          <Music lang={lang} music={music}/>
        ))}
      </VStack>
      <Divider/>
      <Button
        rightIcon={<ExternalLinkIcon/>}
        size='sm'
        colorScheme='orange'
        variant='export'
        bg='rgb()'
      >
        {lang.export}
      </Button>
    </VStack>
  );
  
};

export default React.memo(Playlist);