import React from 'react'
import { Text } from '@chakra-ui/react'

export default function SwirlText({ text, id }) {
  return <Text data-swirl-cms-id={id}>{text}</Text>
}
