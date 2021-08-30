import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { Box, Grid } from '@chakra-ui/react'

import { selectedPhonesDataState } from '@/utils/atoms'

import PhoneGrid from './PhoneGrid'
import Information from './Information'

const Size: FC = () => {
  const phones = useRecoilValue(selectedPhonesDataState)
  return <Box>
    {
      <PhoneGrid>
        {
          phones.map((phone, index) => {
            return <Box key={index}>
              {
                phone ? <Grid gridRowGap={4}>
                  <Information name='크기 (가로 x 세로 x 높이)' data={`${phone.data.size}mm`} />
                  <Information name='무게' data={`${phone.data.weight}g`} />
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

export default Size