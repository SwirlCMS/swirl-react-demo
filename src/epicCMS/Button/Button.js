import React from 'react'
import { Button } from '@chakra-ui/react'

export default function EpicButton({ colorScheme, text, id }) {
  return (
    <Button colorScheme={colorScheme} data-epic-cms-id={id}>
      {text}
    </Button>
  )
}
