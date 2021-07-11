import {Layout, Article} from '@components'
import {serialize} from 'next-mdx-remote/serialize'
import {getAllPosts, getContentBySlug} from '../../lib/content'

const Post = (props): React.ReactNode => {
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
  const content = await serialize(post.content || '')

  return {
    props: {
      ...post,
      content,
    },
  }
}

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

export default Post
