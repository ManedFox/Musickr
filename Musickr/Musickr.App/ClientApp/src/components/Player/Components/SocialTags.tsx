import React from "react";
import {ComponentWithAs, IconProps, Link, Tag, TagLabel, TagLeftIcon, Tooltip} from "@chakra-ui/react";
import {stringify} from "../../Utils/DisplayTools";

type SocialTagsProps = {
  icon:    ComponentWithAs<"svg", IconProps>,
  number?: number,
  label:   string,
  link?:   string,
}

const SocialTags = ({
  icon,
  number,
  label,
  link
}: SocialTagsProps) => {
  
  if (!number) {
    return null;
  }
  
  return (
    <Tooltip
      label={number.toLocaleString("fr-FR")+" "+label /*i18n*/}
      variant="socialsTooltip"
      placement='bottom'
      openDelay={500}
    >
        <Tag>
          <TagLeftIcon as={icon}/>
          <TagLabel>
            {link?
              <Link href={link}>
                {stringify(number)}
              </Link> 
            :
              stringify(number)
            }
          </TagLabel>
        </Tag>
    </Tooltip>
  )
  
}

export default React.memo(SocialTags);