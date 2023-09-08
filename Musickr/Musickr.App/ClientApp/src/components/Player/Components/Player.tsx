import React, {
  useCallback, 
  useMemo, 
  useRef,
  useState
} from "react"

import {
  Box,
  HStack,
  SliderThumb,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  Flex,
  VStack, 
  IconButton, 
  Link, 
  Heading
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
  
  const handleNextTrack = useCallback(() => {
    const newIndex = currentTrackIndex + 1 > tracks.length ? 
      0 : 
      currentTrackIndex + 1;

    onCurrentTrackIndexUpdated(newIndex);
  }, 
  [onCurrentTrackIndexUpdated, currentTrackIndex]);

  const handlePreviousTrack = useCallback(() => {
    const newIndex = currentTrackIndex - 1 < 0 ?
      0 :
      currentTrackIndex - 1;

    onCurrentTrackIndexUpdated(newIndex);
  },
  [onCurrentTrackIndexUpdated, currentTrackIndex]);

  const handlePlay = () => setIsPlaying(!isPlaying);
  
  const handleTrackProgress = useCallback(({ played }) => {
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
  
  if (tracks?.length === 0) {
    return (
      <Flex
        h="full"
        p="4"
        bgColor="gray.100"
        borderRadius="xl"
        alignItems="center"
        justify="center"
      >
        <Heading size="md">
          No tracks found
        </Heading>
      </Flex>
    )
  }
  
  return (
    <Flex
      h="full"
      p="4"
      bgColor="gray.100"
      borderRadius="xl"
      alignItems="center"
    >
      <ReactPlayer 
        ref={player}
        style={{display: "none"}} 
        url={currentTrack.url} 
        playing={isPlaying}
        onEnded={handleNextTrack}
        onProgress={handleTrackProgress}
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
            <Box position="relative" right={10} />
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
            onClick={handlePreviousTrack}
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
            onClick={handleNextTrack}
          />
        </HStack>
      </VStack>
    </Flex>
  )
};

export default React.memo(Player);