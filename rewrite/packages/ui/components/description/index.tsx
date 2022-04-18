import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

type DescriptionProps = {
  type: 'website' | 'article'
  title: string
  description: string
  keywords: string[]
  image?: string
  date?: string
  children: React.ReactNode
}

export const Description = ({
  type,
  title,
  image,
  description,
  date,
  keywords = [],
  children,
}: DescriptionProps): JSX.Element => {
  const router = useRouter()
  const formattedTitle = `${title} - Koen Verburg`
  const imageWithFallback = image ?? '/avatars/avatar-1.jpg'

  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta property="keywords" content={keywords.join(', ')} />

        <link
          rel="canonical"
          href={`https://koenverburg.dev${router.asPath}`}
        />
        <meta
          property="og:url"
          content={`https://koenverburg.dev${router.asPath}`}
        />

        <meta property="og:site_name" content="Koen Verburg" />
        <meta property="og:type" content={type ?? 'website'} />
        <meta property="og:title" content={formattedTitle} />
        <meta property="og:image" content={imageWithFallback} />
        <meta property="og:description" content={description} />

        <meta name="twitter:title" content={formattedTitle} />
        <meta name="twitter:image" content={imageWithFallback} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@koenverburg" />

        {date && <meta property="article:published_time" content={date} />}
      </Head>
      {children}
    </>
  )
}
