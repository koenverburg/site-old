import * as React from 'react'
import { Grid, GridItem, Oneliner, Paragraph } from '@packages/ui/components'
import { Section } from '@packages/ui/skeleton'

export default function Index() {
  return (
    <>
      {/* <Header /> */}

      <Oneliner title="I just pushed to" items={['dotfiles', 'site', 'cloudfiles']} />

      <Section title="I just pushed to">
        Dotfiles
      </Section>

      <Section title="I wrote about">
        <Paragraph content="My plans for 2022" />
      </Section>

      <Section title="Previous projects / Clients I work on/for">
        <Grid>
        </Grid>
      </Section>
    </>
  )
}
