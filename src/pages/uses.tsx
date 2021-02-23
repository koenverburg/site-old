import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import {getContentBySlug} from '../lib/content'

import {Layout, Article} from '@components'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ContentPageUses = (props): React.ReactNode => {
  const content = hydrate(props.content)
  return (
    <Layout
      type="article"
      title={`${props.title} - Koen Verburg`}
      description={props.description}
      date={new Date(props.date).toISOString()}
      key={props.tags}
      >
      <Article
        article={props}
        content={content}
      />
    </Layout>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps() {
  const post = getContentBySlug('uses', [
    'kicker',
    'subTitle',
    'description',
    'title',
    'date',
    'slug',
    'content',
    'tags',
  ], 'content')

  // @ts-ignore
  const content = await renderToString(post.content || '')

  return {
    props: {
      ...post,
      content,
    },
  }
}

export default ContentPageUses
