// tslint:disable: no-implicit-dependencies
import React from 'react'
import {Icon} from '../'
import {render} from '@testing-library/react'

describe('STATELESS - <Icon />', () => {

  it('will render a camera icon', () => {
    const wrapper = render(<Icon name="camera" />)
    expect(wrapper.container).toMatchSnapshot()
  })

  it('will render a github icon', () => {
    const wrapper = render(<Icon name="github" />)
    expect(wrapper.container).toMatchSnapshot()
  })

  it('will render a instagram icon', () => {
    const wrapper = render(<Icon name="instagram" />)
    expect(wrapper.container).toMatchSnapshot()
  })

  it('will render a medium-m icon', () => {
    const wrapper = render(<Icon name="medium-m" />)
    expect(wrapper.container).toMatchSnapshot()
  })

  it('will render a pinterest icon', () => {
    const wrapper = render(<Icon name="pinterest" />)
    expect(wrapper.container).toMatchSnapshot()
  })

  it('will render a twitter icon', () => {
    const wrapper = render(<Icon name="twitter" />)
    expect(wrapper.container).toMatchSnapshot()
  })
})
