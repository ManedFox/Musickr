import React, {useMemo} from 'react';
import {Link, Tag, TagLabel, TagLeftIcon, Tooltip, Text, TagCloseButton} from '@chakra-ui/react';
import i18next from 'i18next';
import {IconType} from 'react-icons';
import useRandomByteFromSeed from "../../../Utils/Hooks/useRandFromSeed";

type GenreTagProps = {
  label?: string;
  setGenre?: React.Dispatch<React.SetStateAction<string>>;
  isSelector?: boolean;
}

const GenreTag = ({
  label,
  setGenre,
  isSelector
}: GenreTagProps) => {

  const GenreHue = useRandomByteFromSeed(label) % 360;
  
  if (!label) {
    return null;
  }

  const changeGenre = () => setGenre(label);
  const removeGenre = () => setGenre('');

  return (
    <Tooltip
      label={label}
      openDelay={500}
    >
      <Tag
        size={isSelector ? 'lg' : 'md'}
        borderRadius={isSelector ? '8px' : '4px'}
        p={isSelector ? '5px' : '5px'}
        paddingLeft={isSelector ? '10px' : '5px'}
        bgColor={'hsl(' + GenreHue + ' 50% 90%)'}
        textColor={'hsl(' + GenreHue + ' 60% 60%)'}
        fontWeight='bold'
      >
        <TagLabel
          as='button'
          onClick={changeGenre}
        >
          {label}
        </TagLabel>
        {isSelector?
          <TagCloseButton
            onClick={removeGenre}
          />
        :
          <></>
        }
      </Tag>
    </Tooltip>
  )

}

export default React.memo(GenreTag);