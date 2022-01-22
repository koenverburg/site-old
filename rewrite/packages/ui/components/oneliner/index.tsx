import * as React from 'react'

export type Props = {
  title: string
  items?: string[]
  children?: React.ReactNode | React.ReactNode[]
}

export const Oneliner = ({
  title,
  items
}: Props) => {
  if (!items) return null

  const tail = items[items.length-1]
  const head = items

  console.log({ item: items[items.length - 1] })

  return (
    <section className="w-max pb-8">

      <h3 className="text-base font-medium text-gray-900 mb-1">
        {title}{' '}

        {head && head.map(item => (
          <span key={item}>
            <strong>{item}</strong>
            {', '}
          </span>
        ))}

        {tail && (
          <>
            {'and '}
            <strong>{tail}</strong>
          </>
        )}

      </h3>
    </section>
  )
}
