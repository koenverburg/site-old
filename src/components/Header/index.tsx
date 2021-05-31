import cx from 'classnames'

type HeaderProps = {
  title: string
  description: string
}

export const Header: React.FC<HeaderProps> = ({title, description}) => {
  return (
    <>
      <article className={cx('mt-8 mb-2')}>
        {title && <h1 className={cx('font-bold mb-4 text-3xl md:text-5xl tracking-tight text-black dark:text-white')}>{title}</h1>}
        {description && <p className={cx('font-bold tracking-tight mb-4 text-gray-600')}>{description}</p>}
      </article>

      {(title || description) &&
        <hr className={cx('my-4')}/>
      }
    </>
  )
}
