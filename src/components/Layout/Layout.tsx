import Head from 'next/head'
import {useRouter} from 'next/router'
import {GetStaticPropsContext} from 'next'
import {useQuery} from '@apollo/client'
import {rootQuery} from '../../rootQuery'
import {initializeApollo} from '../../lib/apolloClient'
import {Footer} from '@features'
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

type LayoutProps = MetaData

function createMeta(metaData) {
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

export const Layout: React.FC<LayoutProps> = (props) => {
  const router = useRouter()
  const {error, data} = useQuery(rootQuery)
  if (error) return(<div>Graphql error<pre><code>{JSON.stringify(error, null, 2)}</code></pre></div>)

  const meta: MetaData = createMeta(props)

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
          {props.children}
        </main>

        <Footer {...data} />
      </div>
    </>
  )
}

export type GetStaticPropsResponse = {
  props: { [key: string]: unknown }
  revalidate?: number | boolean
}

export async function getStaticProps(_context: GetStaticPropsContext): Promise<GetStaticPropsResponse>  {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: rootQuery,
    variables: {},
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 60,
  }
}
