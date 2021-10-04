import * as React from 'react'
import Head from 'next/head'
import {data} from 'data/static'
import {useRouter} from 'next/router'


type MetaData = {
  type?: 'website' | 'article'
  title?: string
  image?: string
  description?: string
  date?: string
  keywords?: string
}

function createMeta(metaData: MetaData): MetaData {
  return {
    type: 'website',
    title: 'Koen Verburg - Developer, Creator',
    image: '/images/avatar.jpg',
    description: 'A passionate Frontend Developer and DevOps enthusiast',
    keywords: data.keywords.join(', '),
    ...metaData,
  }
}

export const Description = (props: LayoutProps) => {
  const router = useRouter()
  const meta = createMeta(props)

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="keywords" content={meta.keywords} />

        <link rel="canonical" href={`https://koenverburg.dev${router.asPath}`} />
        <meta property="og:url" content={`https://koenverburg.dev${router.asPath}`} />

        <meta property="og:site_name" content="Koen Verburg" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:description" content={meta.description} />

        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@koenverburg_" />

        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      {props.children}
    </>
  )
}
