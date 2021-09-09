import { Grid, useMediaQuery } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'

const PhoneGrid: FC<{ children: ReactNode[] }> = ({ children }) => {
  const [ largeScreen ] = useMediaQuery('(min-width: 62em)')
  return <Grid templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} columnGap={10}>
    {children.slice(0, largeScreen ? 3 : 2)}
  </Grid>
}

export default PhoneGrid
