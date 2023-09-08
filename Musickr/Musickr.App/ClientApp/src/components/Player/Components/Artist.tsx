import React from "react";
import {
  Avatar,
  Link,
  LinkOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  VStack
} from "@chakra-ui/react";

type ArtistProps = {
  label:    string;
  link?:    string;
};

const Artist = ({
  label,
  link="#"
}: ArtistProps) => {
  
  return (
    <Tooltip
      variant='playlistTitle'
      label={label}
      openDelay={500}
    >
      <Link variant='playlistArtist' href={link}>
        {label}
      </Link>
    </Tooltip>
  )

};

export default React.memo(Artist);