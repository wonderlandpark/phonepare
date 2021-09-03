import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { Box, Grid, Text } from '@chakra-ui/react'

import { selectedPhonesDataState } from '@/utils/atoms'

import PhoneGrid from './PhoneGrid'
import Information from './Information'

const Display: FC = () => {
  const phones = useRecoilValue(selectedPhonesDataState)
  return <Box>
    {
      <PhoneGrid>
        {
          phones.map((phone, index) => {
            return <Box key={index}>
              {
                phone ? <Grid gridRowGap={4}>
                  <Box textAlign='center'>
                    <Text fontSize='7xl' fontWeight='semibold'>{phone.data.display.size}&quot;</Text>
                    <Text fontSize='2xl' mt={-4}>{phone.data.display.type}</Text>
                  </Box>
                  <Information name='해상도' data={phone.data.display.resolution} />
                  <Information name='PPI' data={String(phone.data.display.ppi)} />
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

export default Display