import React from 'react'
import {gql} from '@apollo/client'
import {Social} from '@graphcms/types'
import styles from './footer.module.scss'
import {Icon} from '@components'

type Props = {
  socials: Social[],
}

const Footer: React.FunctionComponent<Props> = ({socials}) => {
  return (
    <div className={styles.footer}>
      <span className={styles.copyright}>Copyright {(new Date().getFullYear())}</span>
      {socials &&
        <ul className={styles.nav}>
          {socials.map(links => (
            <li key={links.id} className={styles.item}>
              <a
                role="button"
                aria-label={links.handle}
                href={links.url}
                target="_blank"
                rel="noopener"
              >
                <Icon name={links.icon} />
                {links.platform}
              </a>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export const FooterFragments = {
  links: gql`
    fragment FooterLinks on Query {
      socials {
        id
        handle
        icon
        url
        platform
      }
    }
  `,
}

export {Footer}
