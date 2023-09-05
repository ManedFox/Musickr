import React, {useState} from "react";

import {Spinner} from "@chakra-ui/react";

import {useSearchParams} from "react-router-dom";

import PageContent from "../../Utils/PageContent";
import useGetTracks from "../../Utils/Hooks/useGetTracks";
import useGetPhotos from "../../Utils/Hooks/useGetPhotos";
import Player from "../Components/Player";

const PlayerPage = () => {
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
  
  if (isPhotosLoading || isTracksLoading) {
    return (
      <PageContent justify="center" alignItems="center">
        <Spinner size="xl" />
      </PageContent>
    )
  }

  return (
    <PageContent justify="stretch" alignItems="center">
      <Player 
        tracks={tracksData} 
        currentTrackIndex={currentTrackIndex} 
        onCurrentTrackIndexUpdated={setCurrentTrackIndex} 
      />
    </PageContent>
  );
};

export default React.memo(PlayerPage);