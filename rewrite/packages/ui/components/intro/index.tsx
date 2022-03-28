import * as React from 'react'

export type Props = {
  firstName: string
  lastName: string
  position?: string
  companyName?: string
  companyUrl?: string
  content?: string[]
}

export const Intro = ({
  firstName,
  lastName,
  position, 
  companyUrl,
  companyName,
  content
}: Props) => {
  return (
    <article className="text-neutral-900 pt-16 pb-8">

      <h1>
        <span className="text-xl">
          <span className="font-bold">{firstName}</span>{' '}<span>{lastName}</span>
        </span>
      </h1>

      {position && 
        <small className="block pb-4">
          {position}

          {companyName && !companyUrl && <>{' at '}<strong>{companyName}</strong></>}
          {companyName && companyUrl && <>{' at '}<a href={companyUrl}>{companyName}</a></>}
        </small>
      }

      {content && content.map((line, index)=> <p key={index}>{line}</p>)}
    </article>
  )
}
