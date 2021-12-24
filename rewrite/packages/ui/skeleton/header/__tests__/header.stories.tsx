import * as React from 'react'
import { Header, Props } from '../index'

export default {
  title: 'Skeleton/Header',
  component: Header,
}

const Template = (args: Props) => (<Header />)

const Default = Template.bind({})
// @ts-ignore
Default.args = {}
