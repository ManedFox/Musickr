import React from "react";
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
  
  let shortNumber = number.toPrecision(3).split('e')[0];
  shortNumber = number<100 ? shortNumber.split('.')[0] : shortNumber;
  shortNumber += (number >= 1000000) ? "M" : (number >= 1000) ? "K" : "";

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
                {shortNumber}
              </Link> 
            : 
              <Text fontFamily={soundCloudFonts}>
                {shortNumber}
              </Text>
            }
          </TagLabel>
        </Tag>
    </Tooltip>
  )
  
}

export default React.memo(SocialTag);