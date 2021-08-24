import React, { FC } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

const Label: FC<BoxProps> = (props) => {
  return <Box rounded='md' px={2} py={1} m={1} fontSize='sm' {...props} />
}

export default Label