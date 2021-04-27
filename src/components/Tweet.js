import React from 'react'
import {BsDot} from "react-icons/bs"
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import abbreviateNumber from "../utils/abbreviateNumber";
import { Container, Flex, ProfilePicture, InnerContainer, UserDetails, Title, Verified, UserId, Posted, Description, PublicMetricContainer, PublicMetric, Image } from "./Tweet.styles";

const Tweet = ({user, tweet}) => {
  let image;
  if ('entities' in tweet && 'urls' in tweet.entities) {
    image = tweet.entities.urls.map((u,i) => {
      if('images' in u) {
        return <a target="blank" key={i} href={tweet.entities.urls[0].url}><Image  src={u.images[0].url} alt="av" /></a>
      }
      return null;
    });
  }

  const reply_count = abbreviateNumber(tweet.public_metrics.reply_count);
  const retweet_count = abbreviateNumber(tweet.public_metrics.retweet_count);
  const like_count = abbreviateNumber(tweet.public_metrics.like_count);
  return (
  <Container>
    <Flex>
      <ProfilePicture src={user.profile_image_url} alt="profile_pic" />
      <InnerContainer>
      <UserDetails>
        <Title>{user.name}</Title>
        <Verified />
        <UserId>@{user.username}</UserId>
        <BsDot />
        <Posted parse="YYYY-MM-DD HH:mm" fromNow ago date={tweet.created_at}></Posted>
      </UserDetails>
      <Description>{tweet.text}</Description>
       {image}
      <PublicMetricContainer>
        <span>
          <FaRegComment /><PublicMetric>{reply_count}</PublicMetric>
        </span>
        <span>
          <FaRetweet /><PublicMetric>{retweet_count}</PublicMetric>
        </span>
        <span>
          <FaRegHeart /><PublicMetric>{like_count}</PublicMetric>
        </span>
      </PublicMetricContainer>
      </InnerContainer>
    </Flex> 
    
  </Container>
)};


export default Tweet
