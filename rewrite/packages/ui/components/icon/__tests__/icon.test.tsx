import * as React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Icon } from '..'

describe('Component/Icon', () => {
  const icons = [
    'camera',
    'github',
    'instagram',
    'medium-m',
    'pinterest',
    'twitter',
    'twitch'
  ]

  it.each(icons)('renders the "%s" icon', (icon) => {
    const {getByTestId} = render(<Icon name={icon} />) 

    expect(getByTestId(icon)).toBeInTheDocument()
  })

  it('returns null when the icon does not exist', () => {
    const { container }= render(<Icon name={"mockIcon"} />) 

    expect(container.querySelector('svg')).not.toBeInTheDocument()
  })

})
