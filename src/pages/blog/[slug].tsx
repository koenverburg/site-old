import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import {getAllPosts, getContentBySlug} from '../../lib/content'
import {Layout, Article} from '@components'
import {MarkdownComponents} from 'components/MarkdownComponents'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const DetailPage = (props): React.ReactNode => {
  const content = hydrate(props.content, {components: MarkdownComponents})
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
export async function getStaticProps({params}) {
  const post = getContentBySlug(params.slug, [
    'kicker',
    'subTitle',
    'description',
    'title',
    'date',
    'slug',
    'content',
    'tags',
  ])

  // @ts-ignore
  const content = await renderToString(post.content || '')

  return {
    props: {
      ...post,
      content,
    },
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {...post},
      }
    }),
    fallback: false,
  }
}

export default DetailPage
