import React from "react";
import {ComponentWithAs, IconProps, Link, Tag, TagLabel, TagLeftIcon, Tooltip} from "@chakra-ui/react";

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
  
  return (
    <Tooltip
      label={number.toLocaleString("fr-FR")+" "+label /*i18n*/}
      variant="socialsTooltip"
      openDelay={500}
    >
        <Tag>
          <TagLeftIcon as={icon}/>
          <TagLabel>
            {link?
              <Link href={link}>
                {shortNumber}
              </Link> 
            :
              shortNumber
            }
          </TagLabel>
        </Tag>
    </Tooltip>
  )
  
}

export default React.memo(SocialTag);