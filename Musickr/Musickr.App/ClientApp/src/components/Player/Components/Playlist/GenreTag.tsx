import React, {useMemo} from 'react';
import {Link, Tag, TagLabel, TagLeftIcon, Tooltip, Text} from '@chakra-ui/react';
import i18next from 'i18next';
import {IconType} from 'react-icons';
import useRandomByteFromSeed from "../../../Utils/Hooks/useRandFromSeed";

type GenreTagProps = {
  label?: string;
}

const GenreTag = ({
  label,
}: GenreTagProps) => {

  const hue = useRandomByteFromSeed(label) % 360;
  
  if (!label) {
    return null;
  }

  return (
    <Tooltip
      label={label}
      openDelay={500}
    >
      <Tag
        as='button'
        size='md'
        borderRadius='4px'
        bgColor={'hsl(' + hue + ' 50% 90%)'}
        textColor={'hsl(' + hue + ' 60% 60%)'}
        fontWeight='bold'
      >
        <TagLabel>
          {label}
        </TagLabel>
      </Tag>
    </Tooltip>
  )

}

export default React.memo(GenreTag);