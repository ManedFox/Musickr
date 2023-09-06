import React from "react";
import {Box, Center, HStack, Image, Link, Text, Tooltip, VStack} from "@chakra-ui/react";
import Socials from "./Socials";
import {ChatIcon, RepeatIcon, StarIcon, ViewIcon} from "@chakra-ui/icons";

type TitleProps = {
  label: string;
  link?: string
};

const Title = ({label,link}: TitleProps) => {

  return (
    <Tooltip
      label={label}
      variant="socials"
      placement='bottom'
      openDelay={500}
    >
      <Link variant='playlistTitle' fontSize='3.75vw' href={link?link:'#'}>
        {label}
      </Link>
    </Tooltip>
  )
  
};

export default React.memo(Title);