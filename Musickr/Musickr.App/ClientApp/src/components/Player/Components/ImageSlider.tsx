import React, {
  useCallback,
  useMemo,
  useEffect,
  useState
} from "react"

import {
  chakra,
  Heading, 
  shouldForwardProp, 
  VStack,
} from "@chakra-ui/react";

import {
  isValidMotionProp, 
  motion
} from "framer-motion";

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

  const [currentAnimation, setCurrentAnimation] = useState("slideIn");
  
  const currentPhoto = useMemo(() => {
    return photos[currentPhotoIndex];
  }, [photos, currentPhotoIndex]);

  const animationVariants = {
    slideIn: {
      backgroundPositionX: ["1000%", "50%"],
      transition: { duration: 1, type: "spring" }
    },
    slideOut: {
      backgroundPositionX: ["50%", "-1000%"],
      transition: { duration: 1, type: "spring" }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation("slideOut");
    },10*1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleNextPhoto = useCallback(() => {
    const updatedPhotoIndex = currentPhotoIndex + 1;
    
    if (updatedPhotoIndex > photos.length) {
      onCurrentPhotoIndexUpdated(0);
    } else {
      onCurrentPhotoIndexUpdated(updatedPhotoIndex);
    }
  }, [currentPhotoIndex, onCurrentPhotoIndexUpdated, photos]);
  
  const handleAnimationCompleted = useCallback((definition) => {
    if (definition === "slideOut") {
      handleNextPhoto();
      setCurrentAnimation("slideIn");
    }
  }, [handleNextPhoto, setCurrentAnimation]);

  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  
  return (
    <ChakraBox
      variants={animationVariants}
      initial="slideIn"
      animate={currentAnimation}
      bgColor={"black"}
      bgImage={`url('${currentPhoto?.url}')`}
      display="flex"
      h="full"
      bgPos="center"
      bgRepeat="no-repeat"
      borderRadius="xl"
      alignItems="end"
      onAnimationComplete={handleAnimationCompleted}
    >
      <VStack 
        w="full" 
        alignItems="start"
        p="4"
        background="linear-gradient(0deg, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0) 100%)"
        borderBottomRadius="xl"
      >
        <Heading color="gray.100" mb="0">
          {currentPhoto?.title}
        </Heading>
        <Heading color="gray.500" size="sm" fontWeight="light">
          By {currentPhoto?.author}
        </Heading>
      </VStack>
    </ChakraBox>
  )
};

export default React.memo(ImageSlider);