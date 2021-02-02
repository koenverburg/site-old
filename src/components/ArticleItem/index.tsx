import {IArticle} from 'interfaces/Article'
import styles from './articleitem.module.scss'

interface IProps {
  article: IArticle
}

export const ArticleItem: React.FunctionComponent<IProps> = ({article}) => {
  return (
    <Link href={`/blog/${article.slug}`} passHref>
      <a className={styles.root}>
        <span className={styles.kicker}>{article.kicker}</span>
        <h2 className={styles.title}>{article.title}</h2>
        <p className={styles.description}>{article.description}</p>
      </a>
    </Link>
  )
}
