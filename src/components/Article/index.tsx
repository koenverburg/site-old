import {IArticle} from 'interfaces/Article'
import styles from './article.module.scss'

interface IProps {
  article: IArticle,
  content: React.ReactNode
}

export const Article: React.FunctionComponent<IProps> = ({article, content}) => {
  return (
    <section className={styles.section}>
      <span className={styles.kicker}>{article.kicker}</span>
      <h1 className={styles.title}>{article.title}</h1>
      <article className={styles.content}>
        {content}
      </article>
    </section>
  )
}
