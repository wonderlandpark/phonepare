import React, { FC } from 'react'
import type { Color } from '@/utils/types'
import Label from './Label'
import { Text } from '@chakra-ui/react'

const ColorLabel: FC<{ color: Color }> = ({ color }) => {
  return <Label bg={color.color.background || 'gray.100'} color={color.color.color || 'black'} fontSize='sm'>
    <Text display={{ base: 'none', md: 'block'}}>{color.name}</Text>
  </Label>
}

export default ColorLabel