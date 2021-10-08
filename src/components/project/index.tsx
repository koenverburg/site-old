import cx from 'classnames'

type Tag = {
  id: string
  name: string
}

type Props = {
  project: {
    tags: Tag[]
    link: string
    projectName: string
  }
}

const hasLessInfo = true
const roundedBorder = 'rounded-lg ring-1 ring-black ring-opacity-5'

export const Project = ({project}: Props): JSX.Element => {
  return (
    <a href={project?.link ?? '#'} target="_blank" className={
      cx(
        'bg-gray-100 group bg-white shadow-sm overflow-hidden',
        !hasLessInfo && 'flex justify-between',
        roundedBorder
      )} rel="noreferrer">

      <div className={cx('py-2 px-4')}>
        <h4 className={cx('text-base font-medium text-gray-900 mb-1')}>{project.projectName}</h4>
        {!hasLessInfo && <p className={cx('text-sm font-medium text-gray-500')}>Hii</p>}
      </div>

      {!hasLessInfo &&
        <div className={cx('flex flex-col py-2 px-4 items-end')}>
          {project.tags && project.tags.map(t => (
            <span key={t.id} className={cx('w-min text-sm text-gray-500 bg-gray-200 p-1 mb-2', roundedBorder)}>{t.name}</span>
          ))}
        </div>
      }

      {hasLessInfo &&
        <div className={cx('py-2 px-4')}>
          {project.tags && project.tags.map(t => (
            <span key={t.id} className={cx('w-min text-sm text-gray-500 bg-gray-200 p-1 mr-2', roundedBorder)}>{t.name}</span>
          ))}
        </div>
      }
    </a>
  )
}
