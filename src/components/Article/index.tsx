import css from 'classnames'
import {MDXResult, Article as ArticleType} from '@types'
import {MDXRemote} from 'next-mdx-remote'
import {MarkdownComponents} from '@components'

type ArticleProps = {
  article: ArticleType,
  content: MDXResult
}

export const Article = ({article, content}: ArticleProps): JSX.Element => {
  return (
    <section className={css('flex flex-col items-start mb-16')}>
      <span className={css('font-bold tracking-tight mb-4 text-gray-600')}>
        {article.kicker}
      </span>
      <h1
        className={css('font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white')}
      >
        {article.title}
      </h1>
      <article className={css('prose w-full max-w-none')}>
        <MDXRemote
          compiledSource={content.compiledSource}
          components={MarkdownComponents}
        />
      </article>
    </section>
  )
}
