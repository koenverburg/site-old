import {serialize} from 'next-mdx-remote/serialize'
import {getContentBySlug} from '../lib/content'
import {Layout, Article} from '@components'

const ContentPageUses = (props): JSX.Element => {
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
        content={props.content}
      />
    </Layout>
  )
}

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
  const content = await serialize(post.content || '')

  return {
    props: {
      ...post,
      content,
    },
  }
}

export default ContentPageUses
