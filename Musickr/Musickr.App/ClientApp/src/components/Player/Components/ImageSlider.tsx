import React, {
  useCallback,
  useMemo,
  useEffect,
  useState
} from "react"

import {
  chakra, 
  Flex,
  Heading, 
  Icon,
  shouldForwardProp,
  VStack,
} from "@chakra-ui/react";
import {BiSad} from "react-icons/bi";

import {
  isValidMotionProp, 
  motion
} from "framer-motion";
import {useTranslation} from "react-i18next";

import {Photo} from "../../Utils/Hooks/useGetPhotos";

type ImageSliderProps = {
  photos: Photo[];
  currentPhotoIndex: number;
  onCurrentPhotoIndexUpdated: (value: number) => void;
};

const ImageSlider = ({
  photos,
  currentPhotoIndex,
  onCurrentPhotoIndexUpdated
} : ImageSliderProps) => {
  const { t } = useTranslation();
  
  const [currentAnimation, setCurrentAnimation] = useState("slideIn");
  
  const currentPhoto = photos[currentPhotoIndex];

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
  
  if (photos?.length === 0) {
    return (
      <Flex
        h="full"
        bgColor="rgba(0, 0, 0, 0.7)"
        color="white"
        borderRadius="xl"
        alignItems="center"
        justify="center"
      >
        <VStack>
          <Icon 
            as={BiSad} 
            h="24"
            w="24"
          />
          <Heading>
            {t("playerPage.imageSlider.emptyState")}
          </Heading>
        </VStack>
      </Flex>
    )
  }
  
  return (
    <ChakraBox
      variants={animationVariants}
      initial="slideIn"
      animate={currentAnimation}
      bgColor="rgba(0, 0, 0, 0.7)"
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
          {t(
            "playerPage.imageSlider.author", 
            { author: currentPhoto?.author }
          )}
        </Heading>
      </VStack>
    </ChakraBox>
  )
};

export default React.memo(ImageSlider);