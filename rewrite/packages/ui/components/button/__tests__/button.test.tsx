import * as React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Button } from '..'

describe('Skeleton/Button', () => {
  it('render', () => {
    const {getByRole} = render(<Button label="Text" />) 

    expect(getByRole('button')).toBeInTheDocument()
  })
})
