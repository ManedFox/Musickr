import React from "react";
import {
  Avatar,
  Box,
  Center,
  HStack,
  Image,
  Link, LinkOverlay,
  Popover, PopoverArrow, PopoverBody, PopoverCloseButton,
  PopoverContent, PopoverHeader,
  PopoverTrigger,
  Text,
  VStack
} from "@chakra-ui/react";
import Socials from "./Socials";
import {BellIcon, ChatIcon, RepeatIcon, StarIcon, ViewIcon} from "@chakra-ui/icons";

type ArtistProps = {
  label: string;
  link?: string;
  children: JSX.Element;
};

const Artist = ({label,link="#",children}: ArtistProps) => {
  
  let profile:string = link.split('/').slice(0, -1).join('/');

  return (
    <Popover
      placement='bottom'
      isLazy
    >
      <PopoverTrigger>
        <Link variant='playlistArtist' fontSize='3.25vw'>{label}</Link>
      </PopoverTrigger>
      <PopoverContent
        p="5px"
        w="fitContent"
      >
        <PopoverArrow />
        <PopoverBody>
          <VStack>
            <LinkOverlay href={profile}>
              <Avatar name={label} src={"#"/*need the artist's profile picture*/} />
            </LinkOverlay>
            <LinkOverlay href={profile}>
              <Link variant='playlistArtist' href={profile}>{label}</Link>
            </LinkOverlay>
            <LinkOverlay href={profile+'/followers'}>
              {children}
            </LinkOverlay>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )

};

export default React.memo(Artist);