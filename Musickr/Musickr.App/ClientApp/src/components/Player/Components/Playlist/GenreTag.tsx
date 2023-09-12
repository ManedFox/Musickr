import React from 'react';
import {Tag, TagLabel, Tooltip, TagCloseButton} from '@chakra-ui/react';
import useRandomByteFromSeed from "../../../Utils/Hooks/useRandFromSeed";

type GenreTagProps = {
  label?: string;
  setGenre?: React.Dispatch<React.SetStateAction<string>>;
  index?: number;
  setCurrentTrackIndex?: (value: number) => void;
  isSelector?: boolean;
}

const GenreTag = ({
  label,
  setGenre,
  index,
  setCurrentTrackIndex,
  isSelector
}: GenreTagProps) => {

  const GenreHue = useRandomByteFromSeed(label) % 360;
  
  if (!label) {
    return null;
  }

  const changeGenre = isSelector ?
    () => setGenre(label) :
    () => { setGenre(label) ; setCurrentTrackIndex(index) };

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