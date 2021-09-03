import React, { FC } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'


const Card: FC<BoxProps> = (props) => {
  return <Box textAlign='left' p={10} w={{ base: '100%', md: '400px' }} bg='gray.100' rounded='xl' {...props} _hover={{ bg: 'gray.200', cursor: 'pointer' }} />
}

export default Card