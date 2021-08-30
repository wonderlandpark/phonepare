import { Grid } from '@chakra-ui/react'
import React, { FC } from 'react'

const PhoneGrid: FC = ({ children }) => {
  return <Grid templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} columnGap={10}>
    {children}
  </Grid>
}

export default PhoneGrid
