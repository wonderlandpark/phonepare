import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { Box, Grid } from '@chakra-ui/react'

import { selectedPhonesDataState } from '@/utils/atoms'

import PhoneGrid from './PhoneGrid'
import Information from './Information'

const joinWithBr = (arr: string[]) => <>
  {
    arr.map(t => <>
      <span>{t}</span>
      <br/>
    </>
    )}
</>

const Camera: FC = () => {
  const phones = useRecoilValue(selectedPhonesDataState)
  return <Box>
    {
      <PhoneGrid>
        {
          phones.map((phone, index) => {
            return <Box key={index}>
              {
                phone ? <Grid gridRowGap={4}>
                  <Information name='전면 카메라' data={joinWithBr(phone.data.camera.front)} />
                  <Information name='후면 카메라' data={joinWithBr(phone.data.camera.back)} />
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

export default Camera