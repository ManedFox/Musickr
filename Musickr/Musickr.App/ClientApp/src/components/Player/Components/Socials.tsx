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
  return (
    number?
      <Tooltip
        label={number.toLocaleString(local)+" "+label}
        variant="socials"
        placement='bottom'
        openDelay={500}
      >
        {link?
          <Tag>
            <TagLeftIcon as={icon}/>
            <TagLabel>
              <Link href={link}>
                {stringify(number)}
              </Link>
            </TagLabel>
          </Tag>
        :
          <Tag>
            <TagLeftIcon as={icon}/>
            <TagLabel>
              {stringify(number)}
            </TagLabel>
          </Tag>}
      </Tooltip>
      :
      <></>
  )
}

export default React.memo(Socials);