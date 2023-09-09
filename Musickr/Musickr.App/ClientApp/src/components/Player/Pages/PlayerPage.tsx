import React, {useState} from "react";

import {Grid, GridItem, Spinner} from "@chakra-ui/react";

import {StringParam, useQueryParam} from "use-query-params";

import PageContent from "../../Utils/PageContent";
import useGetTracks from "../../Utils/Hooks/useGetTracks";
import useGetPhotos from "../../Utils/Hooks/useGetPhotos";
import Player from "../Components/Player";
import ImageSlider from "../Components/ImageSlider";
import Playlist from "../Components/Playlist";

const PlayerPage = () => {
  const [place, setPlace] = useQueryParam("place", StringParam);
  
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
  
  if (isPhotosLoading || isTracksLoading) {
    return (
      <PageContent justify="center" alignItems="center">
        <Spinner size="xl" />
      </PageContent>
    )
  }
  
  const firstPhoto = photosData[currentPhotoIndex];

  return (
    <PageContent 
      justify="stretch" 
      alignItems="stretch"
      p="0"
      bgImage={`url('${firstPhoto?.url}')`}
      bgSize="cover"
    >
      <Grid
        templateAreas={`"image playlist" "player playlist"`}
        gridTemplateRows="1fr 150px"
        gridTemplateColumns="1fr 300px"
        w="full"
        backdropFilter="blur(10px)"
      >
        <GridItem 
          area="image"
          p="4"
        >
          <ImageSlider 
            photos={photosData} 
            currentPhotoIndex={currentPhotoIndex} 
            onCurrentPhotoIndexUpdated={setCurrentPhotoIndex} 
          />
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
            tracks={tracksData}
          />
        </GridItem>
      </Grid>
      
    </PageContent>
  );
};

export default React.memo(PlayerPage);