import React, { FC } from 'react'
import { Box, ButtonGroup, Heading, IconButton, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer: FC = () => {
  return <Box as='footer' role='contentinfo' mx='auto' maxW='7xl' py='12' px={{ base: '4', md: '8' }}>
    <Stack>
      <Stack direction='row' spacing='4' align='center' justify='space-between'>
        <Box>
          <Link to='/'>
            <Heading>Phonepare</Heading>
          </Link>
          <Text>휴대폰을 비교하세요.</Text>
        </Box>
        <Box>
          <ButtonGroup variant='ghost' color='gray.600'>
            <IconButton as={Link} to='/' aria-label='Home' icon={<FaHome fontSize='20px' />} />
            <IconButton as='a' href='https://github.com/wonderlandpark/phonepare' aria-label='Github' icon={<FaGithub fontSize='20px' />} />
          </ButtonGroup>
        </Box>
      </Stack>
      <Text fontSize='sm' alignSelf={{ base: 'center', sm: 'start' }}>
        &copy; {new Date().getFullYear()} Junseo Park. All rights reserved.
      </Text>
    </Stack>
  </Box>
}

export default Footer