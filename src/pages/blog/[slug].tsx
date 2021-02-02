import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import {getAllPosts, getContentBySlug} from '../../lib/api'

import {Layout, Article} from '@components'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const DetailPage = (props): React.ReactNode => {
  const content = hydrate(props.content)
  return (
    <Layout>
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
    'title',
    'date',
    'slug',
    'content',
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
