import * as React from 'react'

export type Props = {
  title: string
  children: React.ReactNode | React.ReactNode[]
}

export const Section = ({
  title,
  children
}: Props) => {
  return (
    <section className="w-max pb-8">

      {title &&
        <div className="py-2 px-0">
          <h3 className="text-base font-medium text-gray-900 mb-1">{title}</h3>
        </div>
      }

      {children && children}
    </section>
  )
}
