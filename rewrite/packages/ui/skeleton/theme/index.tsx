import * as React from 'react'
import { useTheme } from 'next-themes'
import { Icon } from '../../components/icon'

export type Props = {}

export const Theme = (props: Props) => {
  const [mounted, setMounted] = React.useState<boolean>(false)
  const {theme, setTheme}= useTheme()
  React.useEffect(() => setMounted(true), [])

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={switchTheme}
      className="fixed bottom-3 right-3 w-8 h-8 xbg-gray-200 rounded-full shadow-lg xdark:bg-gray-600 hover:ring-2 ring-gray-300 transition-all flex items-center justify-center dark:bg-gray-600 inline-flex justify-center">
      {mounted && <Icon name={theme === 'dark' ? 'sun' : 'moon'} theme={theme} />}
    </button>
  )
}
