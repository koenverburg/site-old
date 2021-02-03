import React from 'react'
import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document'
import {data} from 'data/static'

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

          <meta name="description" content={data.description} />
          <meta name="keywords" content={data.keywords.join(',')} />
          <meta name="sitemap" content={`${data.urls.https}/sitemap.xml`} />

          <meta name="twitter:site" content={data.urls.https} />
          <meta name="twitter:card" key="twcard" content="summary_large_image" />
          <meta name="twitter:creator" key="twhandle" content={data.handles.twitter.handle} />

          <meta property="og:title" key="ogtitle" content={data.name} />
          <meta property="og:url" key="ogurl" content={data.urls.https} />
          <meta property="og:site_name" key="ogsitename" content={data.name} />
          <meta property="og:description" key="ogdesc" content={data.description} />
          <meta property="og:image" key="ogimage" content="/images/avatar.jpg" />
          <meta property="og:locale" content="nl_NL" />
          <meta property="og:type" content="website" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="author" type="text/plain" href="/humans.txt" />

          <meta name="mobile-web-app-capable" content="false" />
          <meta name="apple-mobile-web-app-title" content={data.name} />
          <meta name="apple-mobile-web-app-capable" content="false" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />

          <link rel="apple-touch-icon" href="/images/avatar.jpg" />
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
