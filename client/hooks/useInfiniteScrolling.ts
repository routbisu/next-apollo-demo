import { useState, useEffect } from 'react'

export const useInfiniteScrolling = (callback: any) => {
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isFetching) return
    callback()
  }, [isFetching])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return

    setIsFetching(true)
  }

  // Reason: https://github.com/microsoft/TypeScript/issues/35423
  return [isFetching, setIsFetching] as const
}
