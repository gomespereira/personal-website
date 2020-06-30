import { Fragment } from 'react'
import Head from 'next/head'

import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <title>Diego Pereira - JavaScript Developer</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <link
          rel="dns-prefetch"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono&family=Gochi+Hand&family=Proza+Libre&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="flex flex-col flex-auto justify-center items-center">{children}</main>
      <Footer />
    </Fragment>
  )
}
