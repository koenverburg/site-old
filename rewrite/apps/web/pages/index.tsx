import { Grid, GridItem, Paragraph } from '@packages/ui/components'
import { Header, Section } from '@packages/ui/skeleton'
import * as React from 'react'

export default function Index() {
  return (
    <>
      <Header />

      <Section title="I just pushed to">
        Dotfiles
      </Section>

      <Section title="I wrote about">
        <Paragraph content="My plans for 2022" />
      </Section>

      <Section title="Previous projects / Clients I work on/for">
        <Grid>
          <GridItem content="IDH - Source Up" />
          <GridItem content="Havi Connect" />
          <GridItem content="DPG Media" />
          <GridItem content="Deltion" />
        </Grid>
      </Section>
    </>
  )
}
