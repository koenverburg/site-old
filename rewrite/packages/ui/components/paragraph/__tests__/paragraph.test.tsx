import * as React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Paragraph } from '..'

describe('Component/Paragraph', () => {
  it('shows content', () => {
    const { getByText } = render(<Paragraph content="content" />) 

    expect(getByText('content')).toBeInTheDocument()
  })

  it.each([
    { content: null},
    { content: undefined }
  ])('does not show anything when passing a falsy value "$content"', ({ content }) => {
    const { container } = render(<Paragraph content={content} />)

    expect(container.querySelector('p')).not.toBeInTheDocument()
  })
})
