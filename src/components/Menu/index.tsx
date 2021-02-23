import Link from 'next/link'
import styles from './menu.module.scss'

export const Menu: React.FunctionComponent = (props) => {
  return (
    <div className={styles.navWrapper}>
        {props.children}
        <nav className={styles.nav}>
          <ul className={styles.links}>
            <li className={styles.link}><Link href="/blog">Blog</Link></li>
            <li className={styles.link}><Link href="/uses">Uses</Link></li>
          </ul>
        </nav>
    </div>
  )
}
