import React, {useCallback, useState} from 'react';
import {Box, Divider, Flex, Heading, VStack} from '@chakra-ui/react';
import {createSearchParams, useNavigate} from 'react-router-dom';
import {StringParam, useQueryParam} from 'use-query-params';
import type {Track as TrackType} from '../../../Utils/Hooks/useGetTracks';
import SearchBar from '../../../Search/Components/SearchBar';
import Track from './Track';
import useRandomByteFromSeed from "../../../Utils/Hooks/useRandFromSeed";
import GenreTag from "./GenreTag";

type PlaylistProps = {
  tracks: TrackType[];
  genre: string;
  setGenre: React.Dispatch<React.SetStateAction<string>>;
  currentTrackIndex: number;
  setCurrentTrackIndex: (value: number) => void;
};

const Playlist = ({
  tracks,
  genre,
  setGenre,
  currentTrackIndex,
  setCurrentTrackIndex,
}: PlaylistProps) => {
  
  const [place, setPlace] = useQueryParam('place', StringParam);
  
  const navigate = useNavigate();

  const onSearchBarChange = useCallback((value: string) => {
    const params = { place: value };
    navigate({
      pathname: '/player',
      search: `?${createSearchParams(params)}`
    })
  },
  [navigate]);
  
  let GenreHue = useRandomByteFromSeed(genre) % 360;
  
  
  return (
    <VStack
      bgColor='white'
      w='100%'
      minW='300px'
      h='100%'
      spacing='0'
      overflow='hidden'
    >
      <VStack
        p='5%'
        w='100%'
      >
        <Heading
          color={!genre ? 'gray.300' : ('hsl(' + GenreHue + ' 60% 60%)')}
          filter='brightness(100%)'
          userSelect='none'
          transition='300ms'
          _hover={{
            filter: 'brightness(85%)',
            transitionDuration: '200ms'
          }}
        >
          Musickr
        </Heading>
        <SearchBar
          onChange={onSearchBarChange}
          defaultValue={place}
        />
        <Flex
          w='100%'
          justifyContent='right'
        >
          <GenreTag
            label={genre}
            setGenre={setGenre}
            isSelector
          />
        </Flex>
      </VStack>
      <Divider w='90%' marginTop='0' />
      <VStack
        w='100%'
        spacing='0'
        overflowX='hidden'
        overflowY='scroll'
        paddingTop='15px'
      >
        {tracks.map((track, index) => (
          !genre || genre == track.genre ?
            <Track
              key={track.url}
              track={track}
              index={index}
              isSelected={currentTrackIndex==index}
              setCurrentTrackIndex={setCurrentTrackIndex}
              setGenre={setGenre}
            />
          :
            <></>
        ))}
      </VStack>
      <Divider w='90%' />
    </VStack>
  );
  
};

export default React.memo(Playlist);