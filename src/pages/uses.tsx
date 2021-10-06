import {serialize} from 'next-mdx-remote/serialize'
import {getContentBySlug} from '../lib/content'
import {Description, Article} from '@components'
import {Article as ArticleType} from '@types'

const ContentPageUses = (props: ArticleType): JSX.Element => {
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

export async function getStaticProps(): Promise<{ props: ArticleType }> {
  const post: ArticleType = getContentBySlug('uses', [
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
