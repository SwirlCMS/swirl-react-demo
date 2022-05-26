import React from 'react'
import { Text } from '@chakra-ui/react'

export default function EpicText({ text, id }) {
  return <Text data-epic-cms-id={id}>{text}</Text>
}