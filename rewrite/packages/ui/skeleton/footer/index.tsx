import * as React from 'react'
import cx from 'classnames'
import { Social } from '../../types'
import { Icon, Divider } from '../../components'

export type Props = {
  socials?: Social[]
}

export const Footer = ({ socials }: Props) => {
  return (
    <div className={cx('flex flex-col justify-center items-start pb-8')}>

      <Divider />

      <div className={cx('w-full sm:flex sm:justify-between')}>
        {/* {socials &&
          <div className={cx('group flex justify-center mb-4 sm:mb-0')}>
            <ul className={cx('inline-flex space-x-4')}>
              {socials.map(links => (
                <li key={links.url} className={cx('flex-1 text-gray-500 hover:text-gray-900')}>
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
        } */}

        <div className={cx('group text-center')}>
          <span className={cx('align-top text-center text-gray-500')}>Copyright {(new Date().getFullYear())}</span>
        </div>

      </div>
    </div>
  )
}
