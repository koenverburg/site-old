import * as React from 'react'
import {
  Paragraph,
  Link,
  Description,
} from '@packages/ui/components'
import { Section } from '@packages/ui/skeleton'

export default function Index() {
  return (
    <Description
      type="website"
      title="Blog"
      image="/avatars/avatar-1.png"
      description="I'm a passionate Software Engineer and I also write some things"
      keywords={[
        'Software Engineer',
        'ReactJS ',
        'CI/CD',
        'Developer Experience',
        'Github',
        'Github Actions',
        'Neovim',
        'Twitch',
        'Coding',
        'blog'
      ]}
    >
      <Section title="I recently wrote about">
        <Paragraph content="My plans for 2022" />
        <Link href="/test" label="My plans for 2022" />
      </Section>
    </Description>
  )
}
