import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { Box, Grid } from '@chakra-ui/react'

import { selectedPhonesDataState } from '@/utils/atoms'

import PhoneGrid from './PhoneGrid'
import Information from './Information'

const Others: FC = () => {
  const phones = useRecoilValue(selectedPhonesDataState)
  return <Box>
    {
      <PhoneGrid>
        {
          phones.map((phone, index) => {
            return <Box key={index}>
              {
                phone ? <Grid gridRowGap={4}>
                  <Information name='방수 등급' data={phone.data.waterproof} />
                </Grid>
                  : ''
              }
            </Box>
          }
          )}
      </PhoneGrid>
    }
  </Box>
}

export default Others