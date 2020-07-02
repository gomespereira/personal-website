import { Fragment } from 'react'
import Head from 'next/head'

import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <title>Diego Pereira - JavaScript Developer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="My personal website"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header />
      <main className="flex flex-col flex-auto justify-center items-center mr-6 ml-6 md:mr-12 md:ml-12 lg:mr-32 lg:ml-32">{children}</main>
      <Footer />
    </Fragment>
  )
}
