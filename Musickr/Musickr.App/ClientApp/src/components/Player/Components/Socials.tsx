import {stringify} from "../../Utils/DisplayTools";
import React from "react";
import {ComponentWithAs, IconProps, Tag, TagLabel, TagRightIcon, Tooltip} from "@chakra-ui/react";

type SocialsProps = {
  local:   string,
  icon:    ComponentWithAs<"svg", IconProps>,
  number?: number,
  label:   string
}

const Socials = ({local, icon, number, label}: SocialsProps) => {
  return (
    number?
      <Tooltip
        label={number.toLocaleString(local)+" "+label}
        variant="socials"
        placement='bottom'
        openDelay={500}
      >
        <Tag>
          <TagRightIcon as={icon}/>
          <TagLabel>
            {stringify(number)}
          </TagLabel>
        </Tag>
      </Tooltip>
      :
      <></>
  )
}

export default React.memo(Socials);