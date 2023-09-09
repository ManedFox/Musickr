import React, {ChangeEvent, useState} from "react";
import {useDebounce} from "react-use";
import {Button, Divider, Heading, VStack} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import SearchBar from "../../Search/Components/SearchBar";
import Track from "./Track";

type PlaylistProps = {
  defaultValue?: string;
  onChange:      (value: string) => void;
  tracks: {
    author:     string,
    title:      string,
    url?:       string,
    image?:     string, // link to the music image (should be a square picture)
    duration?:  number,
    plays?:     number,
    likes?:     number,
    reposts?:   number,
    comments?:  number,
    followers?: number,
    tags?:      string[] // music genre tags
  }[]
};

const Playlist = ({
  defaultValue="",
  onChange,
  tracks
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
    <VStack
      bgColor={'white'}
      w="100%"
      minW="300px"
      h="100%"
      spacing="0"
      overflow={"hidden"}
    >
      <VStack p="5%" w="100%">
        <Heading variant='playlist'>Musickr</Heading>
        <SearchBar onChange={onChange} defaultValue={defaultValue} /> {/* need to modify this component to allow styling */}
      </VStack>
      <Divider w="90%" />
      <VStack w="100%" spacing="0" overflowX={"hidden"} overflowY={"scroll"} paddingTop="5px">
        {tracks.map((track) => (
          <Track track={track}/>
        ))}
      </VStack>
      <Divider w="90%" />
      <Button
        p={"5%"}
        variant='playlistExport'
        rightIcon={<ExternalLinkIcon/>}
      >
        {"Exporter la Playlist" /*i18n*/}
      </Button>
    </VStack>
  );
  
};

export default React.memo(Playlist);