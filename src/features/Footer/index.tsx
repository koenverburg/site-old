import React from 'react'
import cx from 'classnames'
import {Icon} from '@components'
import {gql} from '@apollo/client'
import {Social} from '@graphcms/types'

type Props = {
  socials: Social[],
}

const Footer = ({socials}: Props): JSX.Element => {
  return (
    <div className={cx('flex flex-col justify-center items-start pb-8')}>
      <hr className={cx('w-full border-1 border-gray-200 dark:border-gray-800 mb-4')}/>
      <div className={cx('w-full sm:flex sm:justify-between')}>
        {socials &&
          <div className={cx('group flex justify-center mb-4 sm:mb-0')}>
            <ul className={cx('inline-flex space-x-4')}>
              {socials.map(links => (
                <li key={links.id} className={cx('flex-1 text-gray-500 hover:text-gray-900')}>
                  <a
                    role="button"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={links.url ?? '#'}
                    aria-label={links.handle ?? 'Social Media Link'}
                  >
                    <Icon name={links.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        }
        <div className={cx('group text-center sm:text-right')}>
          <span className={cx('align-top text-center text-gray-500 hover:text-gray-900')}>Copyright {(new Date().getFullYear())}</span>
        </div>
      </div>
    </div>
  )
}

export const FooterFragments = {
  content: gql`
    fragment FooterLinks on Query {
      socials {
        id
        url
        icon
        handle
      }
    }
  `,
}

export {Footer}
