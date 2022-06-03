import React from 'react'
import { Button } from '@chakra-ui/react'

export default function SwirlButton({ colorScheme, text, id }) {
  return (
    <Button colorScheme={colorScheme} data-swirl-cms-id={id}>
      {text}
    </Button>
  )
}
