import React from "react";
import {Link, Tooltip} from "@chakra-ui/react";

type TitleProps = {
  label: string;
  link?: string
};

const Title = ({
  label,
  link="#"
}: TitleProps) => {

  return (
    <Tooltip
      variant="playlistTitle"
      label={label}
      openDelay={500}
    >
      <Link
        variant='playlistTitle'
        href={link}
      >
        {label}
      </Link>
    </Tooltip>
  )
  
};

export default React.memo(Title);