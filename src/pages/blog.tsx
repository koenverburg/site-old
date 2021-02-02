import Link from 'next/link'
import React from 'react';
import {getAllPosts} from '../lib/api'
import {ArticleItem, Layout} from '@components'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Blog({articles}): React.ReactNode {
  return (
    <Layout pageTitle="Blog">
      {articles.map(article => (
        <ArticleItem article={article} />
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
