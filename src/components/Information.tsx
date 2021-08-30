import React, { FC, ReactChild } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import type { IconType } from 'react-icons/lib'

const Information: FC<{ name: string, data: ReactChild, icon?: IconType }> = ({
  name, data, icon: Icon
}) => {
  return <Box textAlign='center' mx='auto' >
    {
      Icon && <Icon size={70} style={{ margin: 'auto' }} />
    }
    <Heading fontSize='xl' my={1}>{name}</Heading>
    <p>{data}</p>
  </Box>
}

export default Information
