import React, {useMemo} from "react";
import {ComponentWithAs, IconProps, Link, Tag, TagLabel, TagLeftIcon, Tooltip, Text} from "@chakra-ui/react";

type SocialTagProps = {
  icon:    ComponentWithAs<"svg", IconProps>,
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
  
  if (!number) {
    return null;
  }

  const simplifiedNumber = useMemo(() => {
      let simplifiedNumber = number.toPrecision(3).split('e')[0];
      simplifiedNumber = number>=100 ? simplifiedNumber : simplifiedNumber.split('.')[0];
      simplifiedNumber += (number >= 1000000) ? "M" : (number >= 1000) ? "K" : "";
    
    return simplifiedNumber
  }, 
  [number]);
  
  const soundCloudFonts = ['Interstate', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Garuda', 'Verdana', 'Tahoma', 'sans-serif'];
  
  return (
    <Tooltip
      label={number.toLocaleString("fr-FR")+" "+label /*i18n*/}
      openDelay={500}
    >
        <Tag>
          <TagLeftIcon as={icon}/>
          <TagLabel>
            {link?
              <Link fontFamily={soundCloudFonts} href={link}>
                {simplifiedNumber}
              </Link> 
            : 
              <Text fontFamily={soundCloudFonts}>
                {simplifiedNumber}
              </Text>
            }
          </TagLabel>
        </Tag>
    </Tooltip>
  )
  
}

export default React.memo(SocialTag);