import React from "react";
import {Avatar, Link, LinkOverlay, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, VStack} from "@chakra-ui/react";

type ArtistProps = {
  label:    string;
  link?:    string;
  children: JSX.Element;
};

const Artist = ({
  label,
  link="#",
  children
}: ArtistProps) => {
  
  const profile:string = link.split('/').slice(0, -1).join('/');

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