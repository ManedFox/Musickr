import React from "react";
import {Link, Tooltip} from "@chakra-ui/react";

type TitleProps = {
  isArtist?: boolean;
  label:     string;
  link:      string;
};

const Title = ({
  isArtist,
  label,
  link
}: TitleProps) => {

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