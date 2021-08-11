import * as React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
// import {GetStaticPropsContext} from 'next'
// import {useQuery} from '@apollo/client'
// import {rootQuery} from '../../rootQuery'
// import {initializeApollo} from '../../lib/apolloClient'
import {Footer} from '@features'
import {Social} from '@graphcms/types'
import styles from './layout.module.scss'
import {Menu} from 'components/Menu'
import {data} from 'data/static'

type MetaData = {
  type?: 'website' | 'article'
  title?: string
  image?: string
  description?: string
  date?: string
  keywords?: string
}

type LayoutProps = MetaData & {
  socials: Social[]
  children: JSX.Element
}

function createMeta(metaData: MetaData): MetaData {
  return {
    type: 'website',
    title: 'Koen Verburg - Developer, Creator',
    image: '/images/avatar.jpg',
    description: 'A passionate Frontend Developer and DevOps enthusiast',
    date: new Date().toISOString(),
    keywords: data.keywords.join(', '),
    ...metaData,
  }
}

export const Layout = (props: LayoutProps) => {
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

      <div className={styles.layout}>
        <Menu />

        <main>
          {React.cloneElement(props.children, {...props })}
        </main>

        <Footer socials={props.socials} />
      </div>
    </>
  )
}
