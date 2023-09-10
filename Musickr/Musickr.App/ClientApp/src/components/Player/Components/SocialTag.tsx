import React, {useMemo} from "react";
import {Link, Tag, TagLabel, TagLeftIcon, Tooltip, Text} from "@chakra-ui/react";
import {IconType} from "react-icons";
import i18next from "i18next";

type SocialTagProps = {
  icon:    IconType,
  number?: number,
  label:   string,
  link?:   string,
}

const SocialTag = ({
  icon,
  number,
  label,
  link
}: SocialTagProps) => {

  const simplifiedNumber = useMemo(() => {

    if (!number) {
      return null;
    }
  
    let simplifiedNumber = number.toPrecision(3).split('e')[0];
    simplifiedNumber = number>=100 ? simplifiedNumber : simplifiedNumber.split('.')[0];
    simplifiedNumber += (number >= 1000000) ? "M" : (number >= 1000) ? "K" : "";
    
    return simplifiedNumber
  }, 
  [number]
  );
  
  if (!simplifiedNumber) {
    return null;
  }
  
  return (
    <Tooltip
      label={number.toLocaleString(i18next.language)+" "+label}
      openDelay={500}
    >
        <Tag>
          <TagLeftIcon as={icon}/>
          <TagLabel>
            {link?
              <Link href={link}>
                {simplifiedNumber}
              </Link> 
            : 
              <Text>
                {simplifiedNumber}
              </Text>
            }
          </TagLabel>
        </Tag>
    </Tooltip>
  )
  
}

export default React.memo(SocialTag);