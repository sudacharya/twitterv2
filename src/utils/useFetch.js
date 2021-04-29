import { useEffect, useState } from "react"
import axios from "axios";

const useFetch = (query, page) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [tweets, setTweets] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const [next_token, setToken] = useState("0");
  const [user, setUser] = useState({});

  useEffect(() => {
    setLoading(true);
    setError(false);
    
    (async () => {
      axios.get(`/api/tweets/${query}/${page}`).then(res => {
        setTweets(prevTweets => {
          return prevTweets.concat(res.data.data);
        })
        if(res.data.user) {
          setUser(res.data.user);
        }
        if(res.data.meta) {
          if(res.data.meta?.next_token != 0 && typeof res.data.meta.next_token !== "undefined") {
            setToken(res.data.meta.next_token);
          }
          
        }
        console.log(res.data);
        
        setHasMore(res.data.data.length > 0)
        setLoading(false)
      }).catch(e => {
        setError(true)
      })
    })();
    
  }, [query, page]);
  return  { loading, error, tweets, hasMore, next_token, user }
}

export default useFetch