import React from 'react';
import cx from 'classnames'
import {getAllPosts} from '../lib/content'
import {ArticleItem, Description, Header} from '@components'

type article = {
  slug: string
  title: string
  kicker: string
  description: string
}

type BlogProps = {
  articles: article[]
}

const Blog = ({articles}: BlogProps) => {
  const blogPageData = {
    title: 'Blog',
    description: 'I write about Frontend, DevOps and Automation.',
  }

  return (
    <Description
      title={`${blogPageData.title} - Koen Verburg`}
      description={blogPageData.description}
      >
      <div className={cx('flex flex-col items-start mb-16')}>
        <Header
          title={blogPageData.title}
          description={blogPageData.description}
        />

        {articles.map(article => (
          <ArticleItem key={article.slug} article={article} />
        ))}
      </div>
    </Description>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps() {
  const articles = getAllPosts([
    'kicker',
    'title',
    'subTitle',
    'slug',
    'description',
    'date',
  ])

  return {
    props: {
      articles,
    },
  }
}

export default Blog
