import * as React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Header } from '..'

describe('Skeleton/Header', () => {
  it('render', () => {
    const { getByText } = render(<Header/>) 
    expect(getByText('header')).toBeInTheDocument()
  })
})
