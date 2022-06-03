import { useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  useEffect(() => {
    import('swirl-cms')
  })
  return (
    <div className="container">
      <Head>
        <title>Basic Chakra app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Static page</h1>
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
