import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { Box, Grid } from '@chakra-ui/react'

import { selectedPhonesDataState } from '@/utils/atoms'

import PhoneGrid from './PhoneGrid'
import Information from './Information'

const Battery: FC = () => {
  const phones = useRecoilValue(selectedPhonesDataState)
  return <Box>
    {
      <PhoneGrid>
        {
          phones.map((phone, index) => {
            return <Box key={index}>
              {
                phone ? <Grid gridRowGap={4}>
                  <Information name='배터리 용량' data={`${phone.data.battery}mAh`} />
                  <Information name='충전 방식' data={phone.data.charge} />
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

export default Battery