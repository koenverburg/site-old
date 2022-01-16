import * as React from 'react'

export type Props = {
  title: string
  children: React.ReactChild | React.ReactElement
}

export const Section = ({
  title,
  children
}: Props) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children && children}
    </section>
  )
}
