import React, { useEffect, useReducer, useRef, useCallback } from "react";
import axios from "axios";
import Tweet from "./Tweet";
import Spinner from "./Spinner";
import Profile from "./Profile"

let userId = "44196397";


const TweetFeed = ({userIdNum}) => {
  
  userId = userIdNum;
  const tweetReducer = (state, action) => {
    switch(action.type) {
      case 'STACK_TWEETS':
        return { ...state, tweets: state.tweets.concat(action.payload.data), user: action.payload.user, next_token: action.payload.meta.next_token }
      case 'FETCHING_TWEETS':
        return { ...state, fetching: action.fetching }
      case 'ADVANCE_PAGE':
        return { ...state, page: state.next_token  }
      case "ADD_ERRORS":
        return { ...state, tweets: state.tweets, errors: action.payload };
      default:
        return state;
    }
  }

  const initialState = { tweets: [], fetching: true, errors: [], user: {}, page: "0", next_token: "0" };
  const [tweetData,  tweetDispatch] = useReducer(tweetReducer, initialState);

  useEffect(() => { (async () => {
    tweetDispatch({ type: "FETCHING_TWEETS", fetching: true });
    try {
      const response = await axios.get(`/api/tweets/${userId}/${tweetData.page}`);
      const { data: payload = [] } = response;
      
      tweetDispatch({
        type: "STACK_TWEETS",
        payload,
      });
      tweetDispatch({ type: "FETCHING_TWEETS", fetching: false })
      
    } catch(e) {
      tweetDispatch({ type: "FETCHING_TWEETS", fetching: false });
      tweetDispatch({ type: "ADD_ERRORS", payload: [e.response.data] });
      
    }
    
  })();
  }, [tweetDispatch, tweetData.page]);

  // implement infinite scrolling with intersection observer
  let bottomBoundaryRef = useRef(null);
  const scrollObserver = useCallback(
    node => {
      new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.intersectionRatio > 0) {
            tweetDispatch({ type: 'ADVANCE_PAGE' });
          }
        });
      }).observe(node);
    },
    [tweetDispatch]
  );
  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);

  
  

  return( 
    <div>
    {!tweetData.fetching && (
      <Profile user={tweetData.user} />
    )}
        <div className="column">
          {tweetData.tweets.map((tweet, index) => (
            <Tweet key={index} user={tweetData.user} tweet={tweet} meta={tweetData.meta} />
          ))}
        </div>
        {tweetData.fetching && (
          <Spinner />
        )}
        <div id='page-bottom-boundary' ref={bottomBoundaryRef}></div>
    </div>   
  ) 
};

export default TweetFeed;