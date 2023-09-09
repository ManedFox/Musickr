import React from "react";
import {Link, Tooltip} from "@chakra-ui/react";

type TitleProps = {
  isArtist?: boolean;
  label:     string;
  link?:     string
};

const Title = ({
  isArtist,
  label,
  link="#"
}: TitleProps) => {

  const soundCloudFonts = ['Interstate', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Garuda', 'Verdana', 'Tahoma', 'sans-serif'];

  return (
    <Tooltip
      label={label}
      openDelay={500}
    >
      {isArtist?
        <Link
          href={link}
          noOfLines={1}
          fontSize='xs'
          color='gray.400'
          transitionDuration='100ms'
          fontFamily={soundCloudFonts}
          _hover={{
            color:'gray.800',
            textDecoration:''
          }}
        >
          {label}
        </Link>
      :
        <Link
          href={link}
          noOfLines={1}
          fontSize='md'
          color='gray.600'
          transitionDuration='50ms'
          fontFamily={soundCloudFonts}
          _hover={{
            color: 'gray.800',
            textDecoration: ''
          }}
        >
          {label}
        </Link>
      }
    </Tooltip>
  )
  
};

export default React.memo(Title);