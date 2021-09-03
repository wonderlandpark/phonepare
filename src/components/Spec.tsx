import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { Box, Grid } from '@chakra-ui/react'
import { MdMemory } from 'react-icons/md'
import { FaMemory, FaCalendarDay } from 'react-icons/fa'

import { selectedPhonesDataState } from '@/utils/atoms'

import PhoneGrid from './PhoneGrid'
import Information from './Information'

const Spec: FC = () => {
  const phones = useRecoilValue(selectedPhonesDataState)
  return <Box>
    {
      <PhoneGrid>
        {
          phones.map((phone, index) => {
            return <Box key={index}>
              {
                phone ? <Grid gridRowGap={4}>
                  <Information name='프로세서' data={phone.data.cpu} icon={MdMemory} />
                  <Information name='메모리' data={phone.data.ram} icon={FaMemory} />
                  <Information name='출시일' data={phone.data.releaseDate} icon={FaCalendarDay} />
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

export default Spec