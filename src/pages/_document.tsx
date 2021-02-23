import React from 'react'
import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document'

class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await super.getInitialProps(ctx)
    return {...initialProps}
  }

  public render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta name="theme-color" content="#f8f8f8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="sitemap" content='/sitemap.xml' />
          <link rel="author" type="text/plain" href="/humans.txt" />

          <meta name="mobile-web-app-capable" content="false" />
          <meta name="apple-mobile-web-app-title" content="Koen Verburg" />
          <meta name="apple-mobile-web-app-capable" content="false" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />

          <link rel="apple-touch-icon" href="/images/avatar.jpg" />
          {process.env.NODE_ENV === 'production' &&
            <script async defer data-website-id={process.env.UMAMI_WEBSITE_ID} src={process.env.UMAMI_HOST}></script>
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
