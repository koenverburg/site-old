import Link from 'next/link'
import cx from 'classnames'
// import styles from './menu.module.scss'

export const Menu: React.FunctionComponent = () => {
  const linkClasses = cx('p-1 sm:p-4 px-4 text-gray-500 hover:text-gray-900')
  return (
    <div className={cx('flex flex-row items-center justify-between my-2')}>

      <Link href="/" passHref>
        <a className={cx('prose-2xl text-gray-900 hover:text-gray-500')}>
          <span className="font-semibold">Koen</span>&nbsp;
          <span>Verburg</span>
        </a>
      </Link>

      <nav>
        <ul className={cx('flex flex-row')}>
          <li className={cx('text-lg')}>
            <Link href="/blog" passHref>
              <a className={linkClasses}>Blog</a>
            </Link>
          </li>
          <li className={cx('text-lg')}>
            <Link href="/uses" passHref>
              <a className={linkClasses}>Uses</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
