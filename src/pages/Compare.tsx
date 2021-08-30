import React, { FC } from 'react'

import { Box, Divider, Heading } from '@chakra-ui/react'
import PhoneGrid from '@/components/PhoneGrid'
import Phone from '@/components/Phone'
import Spec from '@/components/Spec'
import Display from '@/components/Display'
import Camera from '@/components/Camera'
import Size from '@/components/Size'

const Compare: FC = () => {
  return <Box py={10} textAlign='center'>
    <Heading mb={3}>핸드폰 비교하기</Heading>
    <Box px={{ base: 10, md: 32 }}>
      <PhoneGrid>
        <Phone index={0} />
        <Phone index={1} />
        <Phone index={2} mobile />
      </PhoneGrid>
    </Box>
    <Box px={{ base: 10, md: 32 }} py={20} textAlign='left'>
      <Heading>기본 정보</Heading>
      <Divider my={2} />
      <Spec />

      <Heading mt={10}>디스플레이</Heading>
      <Divider my={2} />
      <Display />

      <Heading mt={10}>카메라</Heading>
      <Divider my={2} />
      <Camera />

      <Heading mt={10}>크기 및 무게</Heading>
      <Divider my={2} />
      <Size />
    </Box>
  </Box>
}

export default Compare