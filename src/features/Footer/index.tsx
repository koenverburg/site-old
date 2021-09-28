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
      <div className={cx('w-full')}>
        {socials &&
          <>
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
            {/*<span className={cx('mx-1')}>{links.handle}</span>*/}
            {/*
            <ul className={cx('block space-y-4')}>
              {socials.slice(2, 4).map(links => (
                <li key={links.id} className={cx('text-gray-500 hover:text-gray-900')}>
                  <a
                    role="button"
                    aria-label={links.handle ?? 'social media link'}
                    href={links.url ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx('flex flex-row')}
                  >
                    <Icon name={links?.icon} />
                    <span className={cx('mx-1')}>{links.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
            <ul className={cx('block space-y-4')}>
              {socials.slice(4, 6).map(links => (
                <li key={links.id} className={cx('text-gray-500 hover:text-gray-900')}>
                  <a
                    role="button"
                    aria-label={links.handle ?? 'social media link'}
                    href={links.url ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx('flex flex-row')}
                  >
                    <Icon name={links?.icon} />
                    <span className={cx('mx-1')}>{links.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
            */}
            <span className={cx('align-top text-center text-gray-500 hover:text-gray-900')}>Copyright {(new Date().getFullYear())}</span>
          </>
        }
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
