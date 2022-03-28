import * as React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Intro } from '..'

const defaultProps = {
  firstName: 'John',
  lastName: 'Do'
}

describe('Component/Intro', () => {
  it('creates a logo from the first and last name', () => {
    render(<Intro {...defaultProps} />)

    expect(screen.getByText('John')).toBeInTheDocument()
    expect(screen.getByText('Do')).toBeInTheDocument()
  })

  it('shows the position/title for the person', () => {
    render(<Intro {...defaultProps} position="Software Engineer"/>)

    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
  })

  it('shows the position and company name', () => {
    render(<Intro 
      {...defaultProps}
      position="Software Engineer"
      companyName="Acme"
    />)

    expect(screen.getByText(/Software Engineer/)).toBeInTheDocument()
    expect(screen.getByText('Acme')).toBeInTheDocument()
  })

  it('shows the position and company name with link', () => {
    render(<Intro 
      {...defaultProps}
      position="Software Engineer"
      companyName="Acme"
      companyUrl="https://example.com"
    />)

    expect(screen.getByText(/Software Engineer/)).toBeInTheDocument()
    expect(screen.getByText('Acme')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com')
  })

  it('shows the content', () => {
    render(<Intro 
      {...defaultProps}
      content={['First line', 'Second line']}
    />)

    expect(screen.getByText('First line')).toBeInTheDocument()
    expect(screen.getByText('Second line')).toBeInTheDocument()
  })
})
