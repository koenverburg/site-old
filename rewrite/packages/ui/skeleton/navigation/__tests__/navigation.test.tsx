import * as React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Navigation } from '..'

describe('Skeleton/Navigation', () => {
  it('renders', () => {
    const { getByRole } = render(<Navigation>hi</Navigation>) 
    expect(getByRole('navigation')).toHaveTextContent('hi')
  })
})
