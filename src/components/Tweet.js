import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment';
import { GoVerified } from "react-icons/go"
import {BsDot} from "react-icons/bs"
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import abbreviateNumber from "../utils/abbreviateNumber";

const Tweet = ({user, tweet}) => {
  
  let image;
  if ('entities' in tweet && 'urls' in tweet.entities) {
    image = tweet.entities.urls.map((u,i) => {
      if('images' in u) {
        return <a target="blank" key={i} href={tweet.entities.urls[0].url}><Image  src={u.images[0].url} alt="av" /></a>
      }
      return null;
    })
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
      <Description>     
      {tweet.text}
      
       </Description>
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
)}

const Image = styled.img`
    width: 100%;
    height: 100%;
    inset: 0px;
    z-index: -1;
    overflow: hidden;
    border-radius: 20px;
    margin-bottom: 20px;
    
`

const InnerContainer = styled.div`
  margin-left: 10px;
  height: 100%;
`

const PublicMetric =  styled.span`

margin-left: 10px;

`

const PublicMetricContainer = styled.div`
  max-width: 425px;
  width: 425px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  -webkit-box-pack: justify;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  justify-content: space-between;
  -webkit-box-align: stretch;
  align-items: stretch;
  box-sizing: border-box;
  flex-basis: auto;
  position: relative;
  font-size: 15px;
  font-weight: 300;

  @media (max-width: 300px) {
    max-width: 100px;
    width: 100px;
    font-size: 10px;
    justify-content: flex-start;
  }

  @media (max-width: 1000px) {
    max-width: 250px;
  width: 250px;
  }

  
`


const Verified = styled(GoVerified)`
  color: #1DA1F2;
  margin-left: 5px;
  font-size: 15px;
`

const Posted = styled(Moment)`
  
  color: #2F4F4F;
  font-weight: 300;
  margin-left: 5px;
`

const ProfilePicture = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;

  @media (max-width: 1000px) {
    width: 48px;
    height: 48px;
    
    border-radius: 50%;
  }
`

const UserDetails = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  
`

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom : 10px
`

const Container = styled.blockquote`
  display: block;
  font-family: "Helvetica Neue", "Segoe UI", Roboto, Calibri, sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  border-color: transparent #ddd #bbb; 
  border-style: solid;
  border-width: 0.5px;
  box-shadow: 0 1px 3px rgb(235, 238, 240);
  padding: 16px 16px 16px 16px;
  max-width: 600px;
  margin: 0 auto;
  &:hover{
    background-color: #efefef;
    transition-property: background-color, box-shadow;
    transition-duration: 0.2s;
  }

  @media (max-width: 1000px) {
    
    max-width: 100%;
    
  }
  
`;

const Title = styled.h3`
  color: #000;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
`

const UserId = styled.div`
  color: #2F4F4F;
  font-weight: 400;
  
  font-size: 14px;
`

const Description = styled.p`
  
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  margin-bottom: 10px;
  
`

export default Tweet


//<Posted parse="YYYY-MM-DD HH:mm" fromNow  date={tweet.created_at}></Posted>