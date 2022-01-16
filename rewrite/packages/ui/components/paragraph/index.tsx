import * as React from 'react'
export type Props = {
  content: string
}
export const Paragraph = (props: Props) => {
  return (
    <p className="text-slate-500">{props.content}</p>
  )
}
