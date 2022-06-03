import React, { useEffect, useState } from 'react'
import axios from 'axios'

type Props = {
  components: any
  slug: string
}

export default function SwirlCMS({ components, slug }: Props) {
  const [pageData, setPageData] = useState({})

  // Import the swirl-cms page editor
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    // @ts-ignore
    if (urlParams.has('swirl-cms')) import('@swirl-cms/swirl')
  }, [])

  // Get the page data, including the components once the slug is set
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:3001/page/?slug=/${slug}`
      )
      setPageData(data)
      // TODO: Refresh swirl-cms to identify the new components
    }
    fetchData().catch(console.error)
  }, [slug])

  return (
    <>
      {pageData &&
        // @ts-ignore
        pageData.components?.map(({ metadata }) => {
          const Component = components[metadata.type]
          return Component ? (
            <Component key={metadata.id} {...metadata} />
          ) : (
            <></>
          )
        })}
      {/* @ts-ignore */}
      <swirl-cms></swirl-cms>
    </>
  )
}
