import Link from 'next/link'
import {GetStaticPropsContext} from 'next'
import {useQuery} from '@apollo/react-hooks'

import {rootQuery} from '../../rootQuery'
import {initializeApollo} from '../../lib/apolloClient'

import {Footer} from '@features'
import styles from './layout.module.scss'
import {Menu} from 'components/Menu'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {
  pageTitle?: string
  pageDescription?: string
}

export const Layout: React.FunctionComponent<IProps> = (props) => {
  const {error, data} = useQuery(rootQuery)
  if (error) return(<p>{error.name}</p>)

  return (
    <>
      <div className={styles.layout}>
        <Menu>
          <Link href="/" passHref>
            <a className={styles.logo}>
              <span className={styles.logoLeft}>Koen</span>&nbsp;
              <span className={styles.logoRight}>Verburg</span>
            </a>
          </Link>
        </Menu>

        {props.pageTitle &&
          <h1 className={styles.pageTitle}>{props.pageTitle}</h1>
        }

        {props.pageDescription &&
          <p className={styles.pageDescription}>{props.pageDescription}</p>
        }

        {(props.pageTitle || props.pageDescription) &&
          <hr />
        }

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
    revalidate: 1,
  }
}
