import * as React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Section } from '..'

describe('Skeleton/Section', () => {
  it('renders', () => {
    const {getByText} = render(<Section title={"MockTitle"}>{'children'}</Section>)

    expect(getByText('MockTitle')).toBeInTheDocument()
    expect(getByText('children')).toBeInTheDocument()
  })
})
