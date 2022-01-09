import * as React from 'react'
import { Navigation, Props } from '../index'

export default {
  title: 'Skeleton/Navigation',
  component: Navigation,
}

const Template = (args: Props) => (<Navigation />)

const Default = Template.bind({})
// @ts-ignore
Default.args = {}
