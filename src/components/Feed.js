import React, { useRef, useCallback, useState } from 'react'
import useFetch from "../utils/useFetch";
import Tweet from "./Tweet";
import Spinner from "./Spinner";
import Profile from "./Profile";

const Feed = ({id}) => {
  const [pageNumber, setPageNumber] = useState("0");
  const {
    tweets,
    hasMore,
    loading,
    error,
    next_token,
    user
  } = useFetch(id, pageNumber)

  const observer = useRef()
  const lastTweetElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(next_token);   
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore, next_token])

  return (
    <div style={{marginTop: 60}}>
    {!loading && (
      <Profile user={user} />
    )}
    {tweets.map((tweet, index) => {
      if (tweets.length === index + 1) {
        return <div ref={lastTweetElementRef} key={index}><Tweet tweet={tweet} user={user} /></div>
      }  else {
        return <Tweet tweet={tweet} key={index} user={user} />
      }
    })}
      <div>{loading && (
        <Spinner />
      )}</div>
      <div>{error && 'Error'}</div>
    </div>
  )
}

export default Feed
