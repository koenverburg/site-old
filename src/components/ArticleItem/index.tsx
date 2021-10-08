import cx from 'classnames'
import Link from 'next/link'
import {Article} from '@types'

type ArticleItemProps = {
  article: Article
}

export const ArticleItem: React.FC<ArticleItemProps> = ({article}) => {
  return (
    <Link href={`/blog/${article.slug}`} passHref>
      <a className={cx('w-full')}>
        <div className={cx('w-full mb-8')}>
          <span className={cx('font-semibold mb-4 text-gray-600')}>{article.kicker}</span>
          <h4 className={cx('text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100')}>{article.title}</h4>
          {/* <h4 className={cx('text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100')}>{article.date}</h4> */}
          <p className={cx('text-gray-600 dark:text-gray-400')}>{article.description}</p>
        </div>
      </a>
    </Link>
  )
}
