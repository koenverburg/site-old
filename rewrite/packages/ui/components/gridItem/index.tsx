import css from 'classnames'
import * as React from 'react'

export type Props = {
  content: string
  link?: string
}

const roundedBorder = 'rounded-lg ring-1 ring-black ring-opacity-5'

export const GridItem = (props: Props) => {
  return (
    <a href={props?.link ?? '#'} target="_blank" className={
      css(
        'bg-gray-100 group bg-white shadow-sm overflow-hidden',
        roundedBorder
      )} rel="noreferrer">

      <div className="py-2 px-4">
        <h4 className="text-base font-medium text-gray-900 mb-1">{props.content}</h4>
      </div>

    </a>
  )
}
