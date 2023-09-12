import React, {useCallback} from 'react';
import {Divider, Heading, VStack} from '@chakra-ui/react';
import {createSearchParams, useNavigate} from 'react-router-dom';
import {StringParam, useQueryParam} from 'use-query-params';
import type {Track as TrackType} from '../../../Utils/Hooks/useGetTracks';
import SearchBar from '../../../Search/Components/SearchBar';
import Track from './Track';

type PlaylistProps = {
  tracks: TrackType[];
  currentTrackIndex: number;
  setCurrentTrackIndex: (value: number) => void;
};

const Playlist = ({
  tracks,
  currentTrackIndex,
  setCurrentTrackIndex
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
          color='gray.300'
          userSelect='none'
          _hover={{
            color: 'gray.500',
            transitionDuration: '200ms'
          }}
        >
          Musickr
        </Heading>
        <SearchBar 
          onChange={onSearchBarChange} 
          defaultValue={place} 
        />
      </VStack>
      <Divider w='90%' />
      <VStack
        w='100%'
        spacing='0'
        overflowX='hidden'
        overflowY='scroll'
        paddingTop='15px'
      >
        {tracks.map((track, index) => (
          <Track
            key={track.url}
            track={track}
            index={index}
            isSelected={currentTrackIndex==index}
            setCurrentTrackIndex={setCurrentTrackIndex}
          />
        ))}
      </VStack>
      <Divider w='90%' />
    </VStack>
  );
  
};

export default React.memo(Playlist);