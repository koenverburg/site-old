import * as React from 'react'

export type Props = {
  content: string | null | undefined
}

export const Paragraph = ({ content }: Props) => {
  return !content ? null : (
    <p className="text-slate-500">{content}</p>
  )
}
