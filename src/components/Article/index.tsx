import cx from 'classnames'
import {MDXResult} from '@types'
import {MDXRemote} from 'next-mdx-remote'
import {IArticle} from 'interfaces/Article'
import {MarkdownComponents} from 'components/MarkdownComponents'

type ArticleProps = {
  article: IArticle,
  content: MDXResult
}

export const Article = ({article, content}: ArticleProps): JSX.Element => {
  return (
    <section className={cx('flex flex-col items-start mb-16')}>
      <span className={cx('font-bold tracking-tight mb-4 text-gray-600')}>
        {article.kicker}
      </span>
      <h1
        className={cx('font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white')}
      >
        {article.title}
      </h1>
      <article className={cx('prose w-full max-w-none')}>
        <MDXRemote
          compiledSource={content.compiledSource}
          components={MarkdownComponents}
        />
      </article>
    </section>
  )
}
