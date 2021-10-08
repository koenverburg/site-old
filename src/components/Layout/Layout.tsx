import * as React from 'react'
import {Footer} from '@features'
import {Social} from '@graphcms/types'
import {Menu} from 'components/Menu'
import styles from './layout.module.scss'

type LayoutProps = {
  socials: Social[]
  children: JSX.Element
}

export const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <div className={styles.layout}>
        <Menu />
        <main>
          {React.cloneElement(props.children, {...props})}
        </main>
        <Footer socials={props.socials} />
      </div>
    </>
  )
}
