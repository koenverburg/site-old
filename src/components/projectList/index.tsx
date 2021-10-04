import css from 'classnames'
import {Project} from '@components'

type Props = {
  projects: []
}

export const ProjectList = ({projects}: Props) => {
  if (!projects) return null

  return (
    <div className={css('col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-8 lg:gap-x-8')}>
      {projects.map(p => <Project key={p.id} project={p} />)}
    </div>
  )
}

