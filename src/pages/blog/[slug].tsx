import {Article, Description} from '@components'
import type {MDXResult} from '@types'
import {serialize} from 'next-mdx-remote/serialize'
import {getAllPosts, getContentBySlug} from '../../lib/content'

type Props = {
  title: string
  description: string
  date: string
  tags?: string[]
  content: MDXResult
  canonical_url: string
  slug: string
}

const Post = (props: Props): JSX.Element => {
  return (
    <Description
      type="article"
      title={`${props.title} - Koen Verburg`}
      description={props.description}
      date={new Date(props.date).toISOString()}
      keywords={props.tags}
    >
      <Article
        article={props}
        content={props.content}
      />
    </Description>
  )
}

export async function getStaticProps({params}): Promise<Record<PropertyKey, unknown>> {
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

export async function getStaticPaths(): Promise<Record<PropertyKey, unknown>> {
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
