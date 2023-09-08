import React, {useCallback, useState} from "react";

import {Grid, GridItem, Spinner} from "@chakra-ui/react";

import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";

import PageContent from "../../Utils/PageContent";
import useGetTracks from "../../Utils/Hooks/useGetTracks";
import useGetPhotos from "../../Utils/Hooks/useGetPhotos";
import Player from "../Components/Player";
import Playlist from "../Components/Playlist";

const PlayerPage = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const place = searchParams.get("place");
  
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const { 
    isLoading : isTracksLoading, 
    data : tracksData 
  } = useGetTracks(place);

  const {
    isLoading : isPhotosLoading,
    data : photosData
  } = useGetPhotos(place);

  const onSearchBarChange = useCallback((value: string) => {
    const params = { place: value };

    navigate({
      pathname: "/player",
    })
  },
  [navigate]);
  
  if (isPhotosLoading || isTracksLoading) {
    return (
      <PageContent justify="center" alignItems="center">
        <Spinner size="xl" />
        W
        <Spinner size="xl" />
      </PageContent>
    )
  }

  return (
    <PageContent 
      justify="stretch" 
      alignItems="stretch"
      p="0"
    >
      <Grid
        templateAreas={`"image playlist" "player playlist"`}
        gridTemplateRows="1fr 150px"
        gridTemplateColumns="1fr 300px"
        w="full"
      >
        <GridItem 
          area="image"
          bgColor="red"
        >
          IMAGE
        </GridItem>
        <GridItem 
          area="player"
          bgColor="blue"
          p="4"
        >
          <Player
            tracks={tracksData}
            currentTrackIndex={currentTrackIndex}
            onCurrentTrackIndexUpdated={setCurrentTrackIndex}
          />
        </GridItem>
        <GridItem 
          area="playlist"
          bgColor="yellow"
        >
          <Playlist 
            onChange={onSearchBarChange} 
            defaultValue={place} 
            tracks={tracksData}
          />
        </GridItem>
      </Grid>
      
    </PageContent>
  );
};

export default React.memo(PlayerPage);