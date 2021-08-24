import React, { FC } from 'react'
import type { Color } from '@/utils/types'
import Label from './Label'

const ColorLabel: FC<{ color: Color }> = ({ color }) => {
  return <Label bg={color.color.background || 'gray.100'} color={color.color.color || 'black'} font>
    {color.name}
  </Label>
}

export default ColorLabel