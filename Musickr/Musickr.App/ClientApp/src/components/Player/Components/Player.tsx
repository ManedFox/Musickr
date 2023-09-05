import React, {
  ChangeEvent, useCallback, useMemo, useRef,
  useState
} from "react"

import {
  Box,
  Button,
  HStack,
  SliderThumb,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  Text,
  Flex,
  VStack, IconButton, Link
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import {FaPause, FaPlay} from "react-icons/fa";
import {FaBackwardStep, FaForwardStep} from "react-icons/fa6";

type PlayerProps = {
  tracks: {
    author: string;
    title: string;
    url: string;
  }[];
  currentTrackIndex: number;
  onCurrentTrackIndexUpdated: (value: number) => void;
};

const Player = ({
  tracks,
  currentTrackIndex,
  onCurrentTrackIndexUpdated
} : PlayerProps) => {
  const player = useRef<ReactPlayer>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);

  const currentTrack = useMemo(() => {
    return tracks[currentTrackIndex];
  }, [tracks, currentTrackIndex]);
  
  const nextTrack = useCallback(() => {
    const newIndex = currentTrackIndex + 1 > tracks.length ? 
      0 : 
      currentTrackIndex + 1;

    onCurrentTrackIndexUpdated(newIndex);
  }, 
  [onCurrentTrackIndexUpdated, currentTrackIndex]);

  const previousTrack = useCallback(() => {
    const newIndex = currentTrackIndex - 1 < 0 ?
      0 :
      currentTrackIndex - 1;

    onCurrentTrackIndexUpdated(newIndex);
  },
  [onCurrentTrackIndexUpdated, currentTrackIndex]);

  const handlePlay = () => setIsPlaying(!isPlaying);
  
  const handleProgress = useCallback(({ played }) => {
    setTrackProgress(played * 100);
  },
  [setTrackProgress]);

  const handleSliderChange = useCallback((value) => {
    setTrackProgress(value);
  },
  [player]);
  
  const handleSliderChangeEnd = useCallback((value) => {
    player.current.seekTo(value / 100.0, "fraction");
  }, 
  [player]);
  
  const playButtonIcon = isPlaying ? <FaPause /> : <FaPlay />;
  
  return (
    <Box
      w="full"
      p="4"
      bgColor="gray.100"
      borderRadius="xl"
    >
      <ReactPlayer 
        ref={player}
        style={{display: "none"}} 
        url={currentTrack.url} 
        playing={isPlaying}
        //onEnded={nextTrack}
        onProgress={handleProgress}
      />
      <VStack w="full">
        <Link 
          mb="0" 
          href={currentTrack.url} 
          isExternal
        >
          <b>{currentTrack.title}</b> · {currentTrack.author}
        </Link>
        <Slider
          value={trackProgress}
          step={1}
          min={0}
          max={100}
          onChange={handleSliderChange}
          onChangeEnd={handleSliderChangeEnd}
        >
          <SliderTrack bg="blue.100">
            <Box position='relative' right={10} />
            <SliderFilledTrack bg="blue.600" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
        
        <HStack>
          <IconButton
            isRound={true}
            colorScheme="blue"
            variant="outline"
            size="sm"
            aria-label="backward"
            icon={<FaBackwardStep />}
            onClick={previousTrack}
          />
          <IconButton 
            isRound={true}
            colorScheme="blue"
            aria-label="play"
            icon={playButtonIcon}
            onClick={handlePlay} 
          />
          <IconButton
            isRound={true}
            colorScheme="blue"
            variant="outline"
            size="sm"
            aria-label="forward"
            icon={<FaForwardStep />}
            onClick={nextTrack}
          />
        </HStack>
      </VStack>
    </Box>
  )
};

export default React.memo(Player);