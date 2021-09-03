import * as React from 'react'
import { render } from '@testing-library/react'
import { expect } from 'chai'
import App from './App'

describe('App', () => {
  it('renders cards', () => {
    const { getByText } = render(<App />)

    expect(document.body.contains(getByText('Phonepare')))
    expect(document.body.contains(getByText('어떤 메뉴를 찾으시나요?')))
  })
})