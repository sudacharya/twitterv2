const express = require("express");
let router = express.Router();
const axios = require("axios");


router
  .route("/tweets/:id/:next_token?")
  .get(async (req, res) => {
    const userId = req.params.id;
    console.log("next token", req.params?.next_token);
    const url = `https://api.twitter.com/2/users/${userId}/tweets`;
    const getUserTweets = async () => {
      let userTweets = [];
      let params = {
          "max_results": 20,
          "tweet.fields": "created_at,id,public_metrics,text,entities",
          "expansions": "author_id",
          "user.fields": "description,id,name,profile_image_url,username,public_metrics",
          "exclude": "replies",
          "media.fields": "media_key,preview_image_url,type,url"
      }
      if(req.params?.next_token && req.params.next_token != 0) {
        params["pagination_token"] = req.params.next_token.toString();
      }
  
      const options = {
          headers: {
              "User-Agent": "v2UserTweetsJS",
              "authorization": `Bearer ${process.env.BEARER_TOKEN}`
          }
      }
      let hasNextPage = true;
      let nextToken = null;
      let user;
      let meta;
      
      if (hasNextPage) {
          let resp = await getPage(params, options, nextToken);
          if (resp && resp.meta && resp.meta.result_count && resp.meta.result_count > 0) {  
              user = resp.includes.users[0];
              meta = resp.meta;
              
              if (resp.data) { 
                  userTweets.push.apply(userTweets, resp.data);
              }
  
              if (resp.meta.next_token) {
                  nextToken = resp.meta.next_token;
              } else {
                  hasNextPage = false;
              }
          } else {
              hasNextPage = false;
          }
        }
        
        let message = {
          user: user,
          data: [...userTweets],
          meta: meta,
          hasNextPage: hasNextPage
        };
  
        res.send(message);
    }
    
    const getPage = async (params, options, nextToken) => {
        if (nextToken && nextToken!== 0) {
            console.log("nextToken", nextToken);
            params.pagination_token = nextToken;
        }
        try {
            const resp = await axios.get(url, {
              ...options,
              params
            } );
               
            if (resp.status !== 200) {
                res.send(resp.data);  
                return;
            }
            return resp.data;
        } catch (err) {
            throw new Error(`Request failed: ${err}`);
        }
    }
    getUserTweets();
  });

module.exports = router;

  