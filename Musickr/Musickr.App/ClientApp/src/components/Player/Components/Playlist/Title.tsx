import React from 'react';
import {Link, Tooltip} from '@chakra-ui/react';

type TitleProps = {
  isArtist?: boolean;
  label: string;
  link: string;
};

const Title = ({
  isArtist,
  label,
  link
}: TitleProps) => {

  const transitionDuration = isArtist ? "100ms" : "50ms";
  const fontColor = isArtist ? "gray:400" : "gray:600";
  const fontSize = isArtist ? "xs" : "md";

  return (
    <Tooltip
      label={label}
      openDelay={500}
    >
      <Link
        href={link}
        noOfLines={1}
        fontSize={fontSize}
        color={fontColor}
        transitionDuration={transitionDuration}
        _hover={{
          color: 'gray.800',
          textDecoration: ''
        }}
      >
        {label}
      </Link>
    </Tooltip>
  )
  
};

export default React.memo(Title);