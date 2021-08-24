import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Text, Box, BoxProps, Flex, Grid, Heading } from '@chakra-ui/react'

const Card: FC<BoxProps> = (props) => {
  return <Box textAlign='left' p={10} w={{ base: '100%', md: '400px' }} bg='gray.100' rounded='xl' {...props} _hover={{ bg: 'gray.200', cursor: 'pointer' }} />
}

const Index: FC = () => {
  return <Box minHeight='100vh'>
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <Box textAlign='center'>
        <Text>Phonepare</Text>
        <Heading mb={10}>어떤 메뉴를 찾으시나요?</Heading>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={5}>
          <Link to='/compare'>
            <Card>
              <Text>전 핸드폰을 잘 알아요!</Text>
              <Heading fontSize='2xl'>핸드폰 비교하기</Heading>
            </Card>
          </Link>
          <Link to='/recommend'>
            <Card>
              <Text>저에게 맞는 핸드폰을 찾아보고 싶어요!</Text>
              <Heading fontSize='2xl'>핸드폰 추천받기</Heading>
            </Card>
          </Link>
        </Grid>
      </Box>
    </Flex>
  </Box>
}

export default Index