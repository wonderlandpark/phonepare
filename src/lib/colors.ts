import type { Color } from '@/utils/types'

const Colors: Color[] = [
  {
    id: 'sierra blue',
    name: '시에라 블루',
    color: { background: '#ABC4DB' }
  },
  {
    id: 'midnight',
    name: '미드나이트',
    color: { background: '#43474D', color: '#f9f9f9' }
  },
  {
    id: 'starlight',
    name: '스타라이트',
    color: { background: '#FAF7F4' }
  },
  {
    id: 'blue',
    name: '블루',
    color: { background: '#52758F', color: '#f9f9f9' }
  },
  {
    id: 'apple pink',
    name: '핑크',
    color: { background: '#F6E3DE' }
  },
  {
    id: 'cream',
    name: '크림',
    color: { background: '#F7F3D8' }
  },
  {
    id: 'lavender',
    name: '라벤더',
    color: { background: '#DED3EF' }
  },
  {
    id: 'green',
    name: '그린',
    color: { background: '#636D73' }
  },
  {
    id: 'samsung pink',
    name: '핑크',
    color: { background: '#F7DACF' }
  },
  {
    id: 'samsung grey',
    name: '그레이',
    color: { background: '#8E8E8E' }
  },
  {
    id: 'phantomviolet',
    name: '팬텀 바이올렛',
    color: { background: '#B3B2D1' },
  },
  {
    id: 'phantompink',
    name: '팬텀 핑크',
    color: { background: '#FCD5CE' },
  },
  {
    id: 'phantomwhite',
    name: '팬텀 화이트',
    color: { background: '#F5F5F5' },
  },
  {
    id: 'phantomgrey',
    name: '팬텀 그레이',
    color: { background: '#626367', color: '#f9f9f9' },
  },
  {
    id: 'phantomsilver',
    name: '팬텀 실버',
    color: { background: '#F0F0FA' },
  },
  {
    id: 'phantomblack',
    name: '팬텀 블랙',
    color: { background: '#404040', color: '#f9f9f9' },
  },
  {
    id: 'phantomgold',
    name: '팬텀 골드',
    color: { background: '#CBA498' },
  },
  {
    id: 'phantomred',
    name: '팬텀 레드',
    color: { background: '#C62D37' },
  },
  {
    id: 'phantomtitanium',
    name: '팬텀 티타늄',
    color: { background: '#5F5F5F', color: '#f9f9f9' },
  },
  {
    id: 'phantomnavy',
    name: '팬텀 네이비',
    color: { background: '#3A414B', color: '#f9f9f9' },
  },
  {
    id: 'phantombrown',
    name: '팬텀 브라운',
    color: { background: '#4C3D36', color: '#f9f9f9' },
  },
  {
    id: 'cloudred',
    name: '클라우드 레드',
    color: { background: '#B63339', color: '#f9f9f9' },
  },
  {
    id: 'cloudorange',
    name: '클라우드 오렌지',
    color: { background: '#FAC69E' },
  },
  {
    id: 'cloudlavender',
    name: '클라우드 라벤다',
    color: { background: '#D0B7CC' },
  },
  {
    id: 'cloudnavy',
    name: '클라우드 네이비',
    color: { background: '#313D53', color: '#f9f9f9' },
  },
  {
    id: 'cloudmint',
    name: '클라우드 민트',
    color: { background: '#A7C2BB' },
  },
  {
    id: 'cosmosblack',
    name: '코스모스 블랙',
    color: { background: '#000000', color: '#f9f9f9' },
  },
  {
    id: 'mirrorblack',
    name: '미러 블랙',
    color: { background: '#000000', color: '#f9f9f9' },
  },
  {
    id: 'mirrorpurple',
    name: '미러 퍼플',
    color: { background: '#A364C7', color: '#f9f9f9' },
  },
  {
    id: 'mirrorgold',
    name: '미러 골드',
    color: { background: '#ECE095' },
  },
  {
    id: 'mysticgrey',
    name: '미스틱 그레이',
    color: { background: '#505050', color: '#f9f9f9' },
  },
  {
    id: 'mysticbronze',
    name: '미스틱 브론즈',
    color: { background: '#DCB7AD' },
  },
  {
    id: 'mysticwhite',
    name: '미스틱 화이트',
    color: { background: '#FFFFFF' },
  },
  {
    id: 'mysticblack',
    name: '미스틱 블랙',
    color: { background: '#000000', color: '#f9f9f9' },
  },
  {
    id: 'mysticgreen',
    name: '미스틱 그린',
    color: { background: '#BDECC8' },
  },
  {
    id: 'pacific blue',
    name: '퍼시픽 블루',
    color: { background: '#4f6874', color: 'white' }
  },
  {
    id: 'graphite',
    name: '그래파이트',
    color: { background: '#605E5A', color: '#f9f9f9' },
  },
  {
    id: 'spacegray',
    name: '스페이스 그레이',
    color: { background: '#535150', color: '#f9f9f9' },
  },
  {
    id: 'spacesilver',
    name: '스페이스 실버',
    color: { background: '#D0D8DF' },
  },
  {
    id: 'apple silver',
    name: '실버',
    color: { background: '#ebebe3' },
  },
  {
    id: 'apple gold',
    name: '골드',
    color: { background: '#fad7bd' },
  },
  {
    id: 'midnightgreen',
    name: '미드나이트 그린',
    color: { background: '#4e5851', color: '#f9f9f9' },
  },
  {
    id: 'cosmicblack',
    name: '코스믹 블랙',
    color: { background: '#2d2926', color: '#f9f9f9' },
  },
  {
    id: 'cosmicgray',
    name: '코스믹 그레이',
    color: { background: '#5f6367', color: '#f9f9f9' },
  },
  {
    id: 'cloudblue',
    name: '클라우드 블루',
    color: { background: '#a4c8e1', color: '#f9f9f9' },
  },
  {
    id: 'cloudwhite',
    name: '클라우드 화이트',
    color: { background: '#ece8e4' },
  },
  {
    id: 'crownsilver',
    name: '크라운 실버',
    color: { background: '#dbdbdb' },
  },
  {
    id: 'majesticblack',
    name: '마제스틱 블랙',
    color: { background: '#000000', color: '#f9f9f9' },
  },
  {
    id: 'royalgold',
    name: '로얄 골드',
    color: { background: '#cab8a0', color: '#f9f9f9' },
  },
  {
    id: 'prismblack',
    name: '프리즘 블랙',
    color: { background: '#040301', color: '#f9f9f9' },
  },
  {
    id: 'prismwhite',
    name: '프리즘 화이트',
    color: { background: '#d5eef1' },
  },
  {
    id: 'ceramicwhite',
    name: '세라믹 화이트',
    color: { background: '#f4f1ed' },
  },
  {
    id: 'ceramicblack',
    name: '세라믹 블랙',
    color: { background: '#2a2620', color: '#f9f9f9' },
  },
  {
    id: 'flamingopink',
    name: '플라밍고 핑크',
    color: { background: '#f2756d', color: '#f9f9f9' },
  },
  {
    id: 'prismgreen',
    name: '프리즘 그린',
    color: { background: '#1c6c78', color: '#f9f9f9' },
  },
  {
    id: 'canariayellow',
    name: '카나리아 옐로우',
    color: { background: '#d9de4c', color: '#f9f9f9' },
  },
  {
    id: 'midnightblack',
    name: '미드나이트 블랙',
    color: { background: '#000000', color: '#f9f9f9' },
  },
  {
    id: 'coralblue',
    name: '코랄 블루',
    color: { background: '#95b6e1', color: '#f9f9f9' },
  },
  {
    id: 'titaniumgray',
    name: '티타늄 그레이',
    color: { background: '#7c7b81', color: '#f9f9f9' },
  },
  {
    id: 'lilacpurple',
    name: '라일락 퍼플',
    color: { background: '#c19ebe', color: '#f9f9f9' },
  },
  {
    id: 'deepseablue',
    name: '딥씨 블루',
    color: { background: '#8f8b9c', color: '#f9f9f9' },
  },
  {
    id: 'orchidgray',
    name: '오키드 그레이',
    color: { background: '#183168', color: '#f9f9f9' },
  },
  {
    id: 'maplegold',
    name: '메이플 골드',
    color: { background: '#c4b69c', color: '#f9f9f9' },
  },
  {
    id: 'applepurple',
    name: '퍼플',
    color: { background: '#d1cdda' },
  },
  {
    id: 'black', name: '블랙',
    color: { background: '#000000', color: '#f9f9f9' },
  },
  {
    id: 'white',
    name: '화이트',
    color: { background: '#ffffff' },
  },
  {
    id: 'appleyellow',
    name: '옐로우',
    color: { background: '#ffe681' },
  },
  {
    id: 'applegreen',
    name: '그린',
    color: { background: '#aee1cd' },
  },
  {
    id: 'productred',
    name: '(PRODUCT)ᴿᴱᴰ',
    color: { background: '#ba0c2e', color: '#f9f9f9' },
  },
  {
    id: 'applegray',
    name: '그레이',
    color: { background: '#262529', color: 'white' },
  },
  {
    id: 'oceanblue',
    name: '오션 블루',
    color: { background: '#183168', color: '#f9f9f9' },
  },
  {
    id: 'lavenderpurple',
    name: '라벤더 퍼플',
    color: { background: '#c19ebe', color: '#000' },
  },
  {
    id: 'metalliccopper',
    name: '메탈릭 코퍼',
    color: { background: '#d29880' },
  },
  {
    id: 'auraglow',
    name: '아우라 글로우',
    color: {
      background:
          'linear-gradient(to right, #cdc0c9, #be9eaf, #3f77bb, #00bbcd)',
    },
  },
  {
    id: 'aura white',
    name: '아우라 화이트',
    color: { background: '#f5f5f5' },
  },
  {
    id: 'aurared',
    name: '아우라 레드',
    color: { background: '#ff4848', color: 'white' },
  },
  {
    id: 'aurapink',
    name: '아우라 핑크',
    color: { background: '#fd846e', color: 'white' },
  },
  {
    id: 'aura black',
    name: '아우라 블랙',
    color: { background: '#000000', color: '#fefefe' },
  },
  {
    id: 'aurablue',
    name: '아우라 블루',
    color: { background: '#072676', color: 'white' },
  },
  {
    id: 'prismblue',
    name: '프리즘 블루',
    color: { background: '#95b6e1' },
  },
  {
    id: 'arcticsilver',
    name: '아크틱 실버',
    color: { background: '#dcdddf' },
  },
  {
    id: 'appleblue',
    name: '블루',
    color: { background: '#51b8f2' },
  },
  {
    id: 'zetblack',
    name: '제트 블랙',
    color: { background: '#000000', color: 'white' },
  },
  {
    id: 'appleblack',
    name: '블랙',
    color: { background: '#353535', color: 'white' },
  },
  {
    id: 'rose gold',
    name: '로즈 골드',
    color: { background: '#f9d2ce' },
  },
  {
    id: 'coral',
    name: '코럴',
    color: { background: '#ff6e5a', color: 'white' },
  },
  {
    id: 'oldspacegray',
    name: '스페이스 그레이',
    color: { background: '#b1b2b7', color: 'white' },
  },
  {
    id: 'astro black',
    name: '아스트로 블랙',
    color: { background: '#000000', color: 'white' },
  },
  {
    id: 'newaurorablack',
    name: '뉴 오로라 블랙',
    color: { background: '#181D30', color: 'white' },
  },
  {
    id: 'newmoroccanblue',
    name: '뉴 모로칸 블루',
    color: { background: '#003153', color: 'white' },
  },
  {
    id: 'carminered',
    name: '카민 레드',
    color: { background: '#6F1111', color: 'white' },
  },
  {
    id: 'newplatinum gray',
    name: '뉴 플레티넘 그레이',
    color: { background: '#6c7177', color: 'white' },
  },
  {
    id: 'aurora white',
    name: '오로라 화이트',
    color: { background: '#cfd4e7' },
  },
  {
    id: 'aurora gray',
    name: '오로라 그레이',
    color: { background: '#1f2020', color: 'white' },
  },
  {
    id: 'aurora green',
    name: '오로라 그린',
    color: { background: '#00545f', color: 'white' },
  },
  {
    id: 'illusion sunset',
    name: '일루전 선셋',
    color: {
      background:
          'linear-gradient(to right, #FFEF00, #E39829, #D46C3D, #C64051, #C64051)',
    },
  },
  {
    id: 'aurora black',
    name: '오로라 블랙',
    color: { background: '#000000', color: 'white' },
  },
  {
    id: 'moroccanblue',
    name: '모로칸 블루',
    color: { background: '#003153', color: 'white' },
  },
  {
    id: 'cloudsilver',
    name: '클라우드 실버',
    color: { background: '#D3D3D3' },
  },
  {
    id: 'lavenderviolet',
    name: '라벤더 바이올렛',
    color: { background: '#D8BFD8' },
  },
  {
    id: 'raspberryrose',
    name: '라즈베리 로즈',
    color: { background: '#c66480', color: 'white' },
  },
]

export default Colors