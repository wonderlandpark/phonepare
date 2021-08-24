import { Grid } from '@chakra-ui/react'
import React, { FC } from 'react'

const PhoneGrid: FC = ({ children }) => {
  return <Grid templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} px={{ base: 10, md: 32 }} columnGap={10}>
    {children}
  </Grid>
}

export default PhoneGrid
