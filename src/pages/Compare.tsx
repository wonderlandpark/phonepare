import React, { FC, useEffect, useState } from 'react'
import { Flex, Box, Heading, Text, Select, Image } from '@chakra-ui/react'
import { Phone as PhoneClass, getPhone, Manufacturers, ManufacturersName, Phones } from '@/utils/Phones'
import type { Manufacturer } from '@/utils/types'
import ColorLabel from '@/components/ColorLabel'
import PhoneGrid from '@/components/PhoneGrid'

const Phone: FC<{
  state: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
  mobile?: boolean
  select?: boolean
}> = ({ state, setState, mobile=true, select=true } ) => {
  const [ manufacturer, setManufacturer ] = useState<Manufacturer>()
  const [ phone, setPhone ] = useState<PhoneClass|null>()
  useEffect(() => {
    console.log(state)
    setPhone(getPhone(state))
  }, [state])

  return <Box textAlign='left' {...( mobile ? {} : { display: { base: 'none', lg: 'block' } })}>
    <Text>제조사</Text>
    <Select mb={2} placeholder='선택 안함' onChange={(e) => {
      setManufacturer(e.target.value as Manufacturer)
      setState('')
    }}>
      {
        Manufacturers.map((m: Manufacturer) => <option key={m} value={m}>{ManufacturersName[m]}</option>)
      }
    </Select>
    <Text>기종</Text>
    <Select placeholder='선택해주세요' value={state} onChange={(e) => setState(e.target.value)}>
      {
        Phones.filter(el => manufacturer ? el.data.manufacturer === manufacturer : true).map(phone => <option key={phone.data.id} value={phone.data.id}>{!manufacturer && `[${ManufacturersName[phone.data.manufacturer]}] `}{phone.data.name}</option>)
      }
    </Select>
    {
      phone ? <Box mt={10} textAlign='center'>
        <Image mx='auto' src={phone.image} alt={phone.data.name} width={{ base: '150px', md: '350px' }} height={{ base: '200px', md: '450px' }} />
        <Text fontSize='3xl' fontWeight='bold'>{phone.data.name}</Text>
        <Text mt={2}>색상</Text>
        <Flex wrap='wrap' justifyContent='center'>
          {
            phone.colors.map(color => <ColorLabel color={color} key={color.id} />)
          }
        </Flex>
      </Box> : <Box mt={10} width={{ base: '150px', md: '350px' }} height={{ base: '200px', md: '450px' }} />
    } 
  </Box>
}

const Compare: FC = () => {
  const [ first, setFirst ] = useState<string>('iphone12pro')
  const [ second, setSecond ] = useState<string>('galaxys21+')
  const [ third, setThird ] = useState<string>('velvet')

  return <Box py={10} textAlign='center'>
    <Heading mb={3}>핸드폰 비교하기</Heading>
    <PhoneGrid>
      <Phone state={first} setState={setFirst} />
      <Phone state={second} setState={setSecond} />
      <Phone state={third} setState={setThird} mobile={false} />
    </PhoneGrid>
  </Box>
}

export default Compare