import React from "react";
import {Link, Tooltip} from "@chakra-ui/react";

type TitleProps = {
  variant?: string;
  label:    string;
  link?:    string
};

const Title = ({
  variant="playlistTitle",
  label,
  link="#"
}: TitleProps) => {

  return (
    <Tooltip
      variant='playlistTitle'
      label={label}
      openDelay={500}
    >
      <Link
        variant={variant}
        href={link}
        noOfLines={1}
      >
        {label}
      </Link>
    </Tooltip>
  )
  
};

export default React.memo(Title);