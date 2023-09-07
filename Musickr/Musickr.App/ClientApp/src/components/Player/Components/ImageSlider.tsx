import React, {
  useCallback,
  useMemo,
  useRef,
  useState
} from "react"

import {
  Flex,
} from "@chakra-ui/react";

type ImageSliderProps = {
  photos: {
    author: string;
    title: string;
    url: string;
  }[];
  currentPhotoIndex: number;
  onCurrentPhotoIndexUpdated: (value: number) => void;
};

const ImageSlider = ({
  photos,
  currentPhotoIndex,
  onCurrentPhotoIndexUpdated
} : ImageSliderProps) => {

  return (
    <Flex
      h="full"
      bgColor="gray.100"
      borderRadius="xl"
    >
      
    </Flex>
  )
};

export default React.memo(ImageSlider);