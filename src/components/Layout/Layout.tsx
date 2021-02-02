import Link from 'next/link'
import {GetStaticPropsContext} from 'next'
import {useQuery} from '@apollo/react-hooks'

import {rootQuery} from '../../rootQuery'
import {initializeApollo} from '../../lib/apolloClient'

import {Footer} from '@features'
import styles from './layout.module.scss'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {
  pageTitle: string
  pageDescription: string
}

export const Layout: React.FunctionComponent<IProps> = (props) => {
  const {error, data} = useQuery(rootQuery)
  if (error) return(<p>{error.name}</p>)

  return (
    <>
      <div className={styles.layout}>
        <nav className={styles.nav}>
          <Link href="/" passHref>
            <a className={styles.logo}>
              <span className={styles.logoLeft}>Koen</span>&nbsp;
              <span className={styles.logoRight}>Verburg</span>
            </a>
          </Link>

          <ul className={styles.links}>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <ul className={styles.links}>
            <li><Link href="/blog">blog</Link></li>
          </ul>
        </nav>

        {props.pageTitle &&
          <h1>{props.pageTitle}</h1>
        }

        {props.pageDescription &&
          <p>{props.pageDescription}</p>
        }

        {props.children}
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
    revalidate: 1,
  }
}
