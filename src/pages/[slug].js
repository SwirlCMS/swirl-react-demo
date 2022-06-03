import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import { SwirlCMS } from '@swirl-cms/react'
import * as components from '../swirlCMS'

export default function Home() {
  const { query, isReady } = useRouter()

  return (
    <div className="container">
      <Head>
        <title>Basic Chakra app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {isReady && <SwirlCMS components={components} slug={query.slug} />}
      </main>

      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
