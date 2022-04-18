import * as React from 'react'
import { useTheme } from 'next-themes'
import { Social } from '../../types'
import { Icon } from '@packages/ui/components'

export type Props = {
  firstName: string
  lastName: string
  position?: string
  companyName?: string
  content?: string[]
  avatarUrl?: string
  socials?: Social[]
}

export const Intro = ({
  firstName,
  lastName,
  position,
  companyName,
  content,
  avatarUrl,
  socials
}: Props) => {
  const [mounted, setMounted] = React.useState<boolean>(false)
  const {theme}= useTheme()
  React.useEffect(() => setMounted(true), [])

  return (
    <div className="pt-8 lg:pt-16 pb-8">
      <div className="flex items-center mb-4">
        {avatarUrl && (
          <div className="mr-4">
            <div className="rounded-full bg-gradient-to-tl from-teal-200/60 to-green-400/60 shadow-lg p-1.5">
              <div className="rounded-full h-[80px] w-[80px]">
                <img className="rounded-full" src={avatarUrl} alt="Profile Image"/>
              </div>
            </div>
          </div>
        )}

        <div className="">
          <h1 className="font-bold text-3xl tracking-tight">{firstName}{' '}{lastName}</h1>

          {position && (
            <h2 className="text-gray-500">
              {position}
              {companyName && (
                <>
                  {' at '}
                  <span className="font-semibold">{companyName}</span>
                </>
              )}
            </h2>
          )}
        </div>
      </div>


      <article className="mb-4">
        {content && content.map((line, index) => <p key={index}>{line}</p>)}
      </article>

      {socials &&
        <div className="flex">
          <ul className="inline-flex space-x-4">
            {socials.map(links => (
              <li key={links.url} className="flex-1 text-gray-500 xhover:text-gray-900">
                <a
                  role="button"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={links.url ?? '#'}
                  className="text-gray-500"
                  aria-label={links.handle ?? 'Social Media Link'}
                >
                  {mounted && <Icon name={links.icon} theme={theme} />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}
