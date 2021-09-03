import React, { FC, useState } from 'react'
import { Flex, Box, Text, Select, Image } from '@chakra-ui/react'
import { Manufacturers, ManufacturersName, Phones } from '@/utils/phones'
import type { Manufacturer } from '@/utils/types'
import ColorLabel from '@/components/ColorLabel'
import { useRecoilState, useRecoilValue } from 'recoil'
import { selectedPhonesDataState, selectedPhonesState } from '@/utils/atoms'

const Phone: FC<{
  index: number
  mobile?: boolean
  select?: boolean
}> = ({ index, mobile=true, select=true } ) => {
  const [ manufacturer, setManufacturer ] = useState<Manufacturer>()
  const [ selectedPhones, setSelectedPhones ] = useRecoilState(selectedPhonesState)
  const selectedPhonesData = useRecoilValue(selectedPhonesDataState)

  function updatePhoneIndex(value: string): void {
    setSelectedPhones(v => {
      const copied = [ ...v ]
      copied[index] = value
      return copied as [ string, string, string ]
    })
  }
  return <Box textAlign='left' {...( mobile ? {} : { display: { base: 'none', lg: 'block' } })}>
    {
      select && <>
        <Text>제조사</Text>
        <Select mb={2} placeholder='선택 안함' onChange={(e) => {
          updatePhoneIndex('')
          setManufacturer(e.target.value as Manufacturer)
        }}>
          {
            Manufacturers.map((m: Manufacturer) => <option key={m} value={m}>{ManufacturersName[m]}</option>)
          }
        </Select>
        <Text>기종</Text>
        <Select placeholder='선택해주세요' value={selectedPhones[index]} onChange={(e) => updatePhoneIndex(e.target.value)}>
          {
            Phones.filter(el => manufacturer ? el.data.manufacturer === manufacturer : true).map(phone => <option key={phone.data.id} value={phone.data.id}>{!manufacturer && `[${ManufacturersName[phone.data.manufacturer]}] `}{phone.data.name}</option>)
          }
        </Select>
      </>
    }
    {
      selectedPhonesData[index] ? <Box mt={10} textAlign='center'>
        <Image mx='auto' src={selectedPhonesData[index]?.image} alt={selectedPhonesData[index]?.data.name} width={{ base: '150px', md: '350px' }} height={{ base: '200px', md: '450px' }} />
        <Text fontSize='3xl' fontWeight='bold'>{selectedPhonesData[index]?.data.name}</Text>
        <Text mt={2}>색상</Text>
        <Flex wrap='wrap' justifyContent='center'>
          {
            selectedPhonesData[index]?.colors.map(color => <ColorLabel color={color} key={color.id} />)
          }
        </Flex>
      </Box> : <Box mt={10} width={{ base: '150px', md: '350px' }} height={{ base: '200px', md: '450px' }} />
    } 
  </Box>
}

export default Phone