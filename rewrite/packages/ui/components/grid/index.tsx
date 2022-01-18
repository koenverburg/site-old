import * as React from 'react'

export type Props = {
  children: React.ReactNode | React.ReactNode[]
}

export const Grid = (props: Props) => {
  return (
    <div className="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-8 lg:gap-x-8">
      {props.children}
    </div>
  )
}
