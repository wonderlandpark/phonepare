import React, { FC } from 'react'

import { useRecoilState, useSetRecoilState } from 'recoil'
import { Flex, Grid, Box, Heading, Text, Progress, Button } from '@chakra-ui/react'

import { questionIndexState, questionTagsState, selectedPhonesState } from '@/utils/atoms'
import Questions from '@/lib/question'
import Card from '@/components/Card'
import { getRecommended } from '@/utils/phones'
import Compare from './Compare'

const Recommend : FC = () => {
  const [ questionIndex, setQuestionIndex ] = useRecoilState(questionIndexState)
  const [ questionTags, setQuestionTags ] = useRecoilState(questionTagsState)
  const setSelecetedPhones =  useSetRecoilState(selectedPhonesState)

  return <Box py={10} textAlign='center'>
    <Heading mb={3}>폰 추천받기</Heading>
    {
      questionIndex < Questions.length ? <Box px={{ base: 10, md: 32 }}>
        <Flex height='60vh' alignItems='center' justifyContent='center'>
          <Box>
            <Heading fontSize='2xl'>{Questions[questionIndex].question}</Heading>
            <Progress mt={4} mb={6} value={questionIndex} max={Questions.length} size='md' rounded='2xl' />
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={5}>
              {
                Questions[questionIndex].options.map((option, index) => <Card key={index} onClick={() => {
                  setQuestionTags({ ...questionTags, [Questions[questionIndex].id]: option.value })
                  setQuestionIndex(questionIndex + 1)
                  if(questionIndex < Questions.length) setSelecetedPhones(getRecommended(questionTags).map(x => x.data.id) as [ string, string, string ])
                }}>
                  <Text>{option.subLabel}</Text>
                  <Heading fontSize='xl'>{option.label}</Heading>
                </Card>
                )
              }
            </Grid>
          </Box>
        </Flex> 
      </Box> : <Box>
        <Heading fontSize='2xl'>아래 휴대폰을 추천드립니다!</Heading>
        <Button mt={4} onClick={() => setQuestionIndex(0)}>다시 고르기</Button>
        <Compare asComponent />
      </Box>
    }     
  </Box>
}

export default Recommend