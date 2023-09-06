import {stringify} from "../../Utils/DisplayTools";
import React from "react";
import {
  ComponentWithAs,
  IconProps,
  Link,
  LinkOverlay,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Tooltip
} from "@chakra-ui/react";

type SocialsProps = {
  local:   string,
  icon:    ComponentWithAs<"svg", IconProps>,
  number?: number,
  label:   string,
  link?:   string,
}

const Socials = ({local, icon, number, label, link}: SocialsProps) => {
  
  if (!number) {
    return null;
  }
  
  return (
    <Tooltip
      label={number.toLocaleString(local)+" "+label}
      variant="socials"
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

export default React.memo(Socials);