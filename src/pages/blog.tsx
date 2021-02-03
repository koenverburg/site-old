import React from 'react';
import {getAllPosts} from '../lib/content'
import {ArticleItem, Layout} from '@components'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Blog({articles}): React.ReactNode {
  return (
    <Layout pageTitle="Blog" pageDescription="I write about frontend, devOps and Automation.">
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
