import * as React from 'react'
import { Grid, GridItem, Paragraph, Intro, Link, Divider } from '@packages/ui/components'
import { Section } from '@packages/ui/skeleton'

export default function Index() {
  const socials = [
    { url: "https://www.twitter.com/koenverburg", handle: "@koenverburg", icon: 'twitter' },
    { url: "https://github.com/koenverburg", handle: "@koenverburg", icon: 'github' },
    { url: "https://www.instagram.com/koenverburg.tech", handle: "@koenverburg.tech", icon: 'instagram' },
    { url: "https://koenverburg.medium.com", handle: "@koenverburg", icon: 'medium-m' },
    { url: "https://twitch.tv", handle: "@koenverburg", icon: 'twitch' },
  ]
  return (
    <>
      <Intro
        firstName="Koen"
        lastName="Verburg"
        position="Software Engineer"
        avatarUrl="/avatars/avatar-1.png"
        companyName="Adidas"
        socials={socials}
        content={[
          "I'm a passionate Software Engineer, I care about Developer Experience, CI/CD, and faster roll-outs. During the day I work on the ReactJS app that powers adidas.com",
          "At night I work on Go and Nodejs Applications which I deploy on my homelab running Kubernetes."
        ]}
      />

      <Divider />
{/*

      <Section title="I recently wrote about">
        <Paragraph content="My plans for 2022" />
        <Link href="/test" label="My plans for 2022" />
      </Section>

      <Section title="Previous projects I worked on">
        <Grid>
          <GridItem content="HAVI Connect - HAVI Logistics" />
          <GridItem content="Webshops for DPG" />
          <GridItem content="Source Up - IDH" />
          <GridItem content="Deltion" />
        </Grid>
      </Section>
 */}
    </>
  )
}
