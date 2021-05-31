import cx from 'classnames'
import {IArticle} from 'interfaces/Article'

type ArticleProps = {
  article: IArticle,
  content: React.ReactNode
}

export const Article: React.FC<ArticleProps> = ({article, content}) => {
  return (
    <section className={cx('flex flex-col items-start mb-16')}>
      <span className={cx('font-bold tracking-tight mb-4 text-gray-600')}>{article.kicker}</span>
      <h1 className={cx('font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white')}>{article.title}</h1>
      <article className={cx('prose w-full max-w-none')}>
        {content}
      </article>
    </section>
  )
}
