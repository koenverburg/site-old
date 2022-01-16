import { Paragraph } from '@packages/ui/components'
import { Section } from '@packages/ui/skeleton'
import * as React from 'react'

export default function Web() {
  return (
    <>
      <Section title="I just pushed to">
        Dotfiles
      </Section>

      <Section title="I wrote about">
        <Paragraph content="My plans for 2022" />
      </Section>

      <Section title="Previous projects / Clients I work on/for">
        <Paragraph content="DPG" />
        <Paragraph content="Deltion" />
      </Section>
    </>
  )
}
