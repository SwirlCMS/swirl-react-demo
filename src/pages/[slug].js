import {useEffect, useState} from 'react'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import * as components from '../epicCMS'

// TODO: Create a library for this with its own repo
function EpicCMS({components, slug}) {
  const [pageData, setPageData] = useState({})

  // Import the epic-cms page editor
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has('swirl-cms')) import('epic-cms')
  }, []);

  // Get the page data, including the components once the slug is set
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:3001/page/?slug=/${slug}`)
      setPageData(data)
      // TODO: Refresh epic-cms to identify the new components
    }
    fetchData()
      .catch(console.error)
  }, [])

  return (
    <>
      { pageData && pageData.components?.map(({metadata}) => {
        const Component = components[metadata.type]
        return Component ? <Component key={metadata.id} {...metadata} /> : <></>
      })}
      <epic-cms></epic-cms>
    </>
  )
}

export default function Home() {
  const { query, isReady } = useRouter()

  return (
    <div className="container">
      <Head>
        <title>Basic Chakra app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        { isReady && <EpicCMS components={components} slug={query.slug} /> }
      </main>

      <style jsx>{`
        
      `}</style>

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
