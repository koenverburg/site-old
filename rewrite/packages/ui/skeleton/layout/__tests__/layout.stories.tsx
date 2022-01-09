import * as React from 'react'
import { Layout, Props } from '../index'

export default {
  title: 'Skeleton/Layout',
  component: Layout,
}

const Template = (args: Props) => (<Layout />)

const Default = Template.bind({})
// @ts-ignore
Default.args = {}
