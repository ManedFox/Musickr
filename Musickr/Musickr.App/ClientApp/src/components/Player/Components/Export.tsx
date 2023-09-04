import React from "react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Button, Divider, HStack, Text} from "@chakra-ui/react";

type ExportProps = {
  label: string
}

const Export = ({label}: ExportProps) => {
  return (
      <Button
        rightIcon={<ExternalLinkIcon/>}
        size='sm'
        colorScheme='orange'
        variant='export'
        bg='rgb()'
      >
        {label}
      </Button>
  )
}

export default React.memo(Export);