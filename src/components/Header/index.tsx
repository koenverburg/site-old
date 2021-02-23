import styles from './header.module.scss'

interface IProps {
  title: string
  description: string
}
export const Header: React.FunctionComponent<IProps> = ({title, description}) => {
  return (
    <>
      <article>
        {title && <h1 className={styles.title}>{title}</h1>}
        {description && <p className={styles.description}>{description}</p>}
      </article>

      {(title || description) &&
        <hr />
      }
    </>
  )
}
