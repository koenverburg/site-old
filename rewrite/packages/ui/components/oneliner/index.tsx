import * as React from 'react'

export type Props = {
  title: string
  children?: React.ReactNode | React.ReactNode[]
}

export const Oneliner = ({
  title,
  children
}: Props) =>
  !children ? null : (
    <section className="w-max pb-8">
      <h3 className="text-base font-medium text-gray-900 mb-1">
        {title}{' '}
        {children}
      </h3>
    </section>
  )
