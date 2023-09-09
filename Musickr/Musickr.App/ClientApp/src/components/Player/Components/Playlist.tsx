import React, {ChangeEvent, useCallback, useState} from "react";
import {useDebounce} from "react-use";
import {Button, Divider, Heading, VStack} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import SearchBar from "../../Search/Components/SearchBar";
import Track from "./Track";
import {createSearchParams, useNavigate} from "react-router-dom";
import {StringParam, useQueryParam} from "use-query-params";

type PlaylistProps = {
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
  tracks
}: PlaylistProps) => {
  const [place, setPlace] = useQueryParam("place", StringParam);
  
  const navigate = useNavigate();

  const onSearchBarChange = useCallback((value: string) => {
    const params = { place: value };

    navigate({
      pathname: "/player",
      search: `?${createSearchParams(params)}`
    })
  },
  [navigate]);
  
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
        <SearchBar 
          onChange={onSearchBarChange} 
          defaultValue={place} 
        />
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