import * as React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Layout } from '..'

describe('Skeleton/Layout', () => {
  it('renders', () => {
    const { getByText } = render(<Layout>hi</Layout>)
    expect(getByText('hi')).toBeInTheDocument()
  })
})
