import * as React from 'react'
import { render } from '@testing-library/react'
import { expect } from 'chai'
import App from './App'
import { MemoryRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const Page: React.FC<{ path: string }> = ({ path }) => <RecoilRoot>
  <MemoryRouter initialEntries={[ path ]}>
    <App/>
  </MemoryRouter>
</RecoilRoot>

describe('Pages', () => {
  it('compare', () => {
    const { getByText } = render(<Page path='/#/compare' />)
    expect(document.body.contains(getByText('폰 비교하기')))
  })
})