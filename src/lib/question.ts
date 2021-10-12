import type { Question } from '@/utils/types'

const Questions: Question[] = [
  {
    id: 'apple',
    question: '어떤 제품을 선호하시나요?',
    options: [
      {
        label: '전 애플 제품들을 선호합니다!',
        subLabel: 'iOS',
        value: true
      },
      {
        label: '전 안드로이드 제품을 선호합니다!',
        subLabel: 'Android',
        value: false
      }
    ]
  },
  {
    id: 'game',
    question: '게임을 주로 플레이하시나요?',
    options: [
      {
        label: '전 주로 게임을 플레이합니다.',
        value: true
      },
      {
        label: '전 게임은 많이 플레이하지 않습니다.',
        value: false
      }
    ],
  },
  {
    id: 'battery',
    question: '많은 양의 배터리가 필요하신가요?',
    options: [
      {
        label: '네, 전 배터리가 많이 필요해요.',
        value: true
      },
      {
        label: '아니요, 배터리가 많이 필요하진 않아요.',
        value: false
      }
    ]
  },
  {
    id: 'screen',
    question: '큰 화면이 필요하신가요?',
    options: [
      {
        label: '네, 전 큰 화면이 필요합니다.',
        value: true
      },
      {
        label: '아니요, 큰 화면은 필요하지 않아요.',
        value: false
      }
    ]
  }
]

export default Questions