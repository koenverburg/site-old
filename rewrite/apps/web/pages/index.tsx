import * as React from 'react'
import { Grid, GridItem, Oneliner, Paragraph, Intro } from '@packages/ui/components'
import { Section } from '@packages/ui/skeleton'

export default function Index() {
  return (
    <>
      {/* <Header /> */}

      <Intro
        name="Koen Verburg"
        position="Software Engineer"
        companyName="Acme"
        companyUrl="https://example.com"
        content={[
          "I'm a passionate Software Engineer, during the day I work on the react app that powers Acme.",
          "At night I work on Nodejs Applications and my homelab which is running Kubernetes and a whole bunch of other stuff.",
          "Update: I'm looking into openfaas to run on older style Raspberry pi's (less then 4 GiB Ram)"
        ]}
      />

      <Oneliner title="I just pushed to" items={['dotfiles', 'site', 'cloudfiles']} />

      <Section title="I wrote about">
        <Paragraph content="My plans for 2022" />
      </Section>

      <Section title="Previous projects / Clients I work on/for">
        <Grid>
          <GridItem content="item 1" />
        </Grid>
      </Section>
    </>
  )
}
