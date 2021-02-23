import React from 'react';
import {getAllPosts} from '../lib/content'
import {ArticleItem, Layout, Header} from '@components'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Blog({articles}): React.ReactNode {
  const blogPageData = {
    title: 'Blog',
    description: 'I write about Frontend, DevOps and Automation.',
  }

  return (
    <Layout
      title={`${blogPageData.title} - Koen Verburg`}
      description={blogPageData.description}
      >
      <Header
        title={blogPageData.title}
        description={blogPageData.description}
      />

      {articles.map(article => (
        <ArticleItem key={article.slug} article={article} />
      ))}
    </Layout>
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
  ])

  return {
    props: {
      articles,
    },
  }
}
