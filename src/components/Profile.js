import React from 'react'
import styled from 'styled-components'
import { Flex, Verified } from "../GlobalStyles";
import abbreviateNumber from "../utils/abbreviateNumber";

const Profile = ({user}) => {
  
  return (
    <Container>
      <img src={user.profile_image_url} className="profileImage" alt="pp"/>
      <Flex>
        <h3 className="name">{user.name}</h3>
        <Verified />
      </Flex>
      <p className="username">@{user.username}</p>
      <p className="description">{user.description}</p>
      <Flex>
        <span>
          <span className="metric">{abbreviateNumber(user.public_metrics.following_count)}</span> <span className="metricName">Following</span>
        </span>
        <span>
          <span className="metric">{abbreviateNumber(user.public_metrics.followers_count)}</span> <span className="metricName">Followers</span>
        </span>
      </Flex>
    </Container>
  )
}



const Container = styled.div`
display: block;
font-family: "Helvetica Neue", "Segoe UI", Roboto, Calibri, sans-serif;
font-size: 12px;
font-weight: bold;
line-height: 16px;

padding: 16px 16px 16px 16px;
max-width: 600px;
margin: 0 auto;
margin-top: 60px;
&:hover{
  background-color: #efefef;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
}

@media (max-width: 1000px) {
  max-width: 100%;
}

.name {
  padding-top: 10px;
  text-align: center;
}

.username {
  font-weight: 300;
}

.profileImage {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.description {
  font-size: 14px;
  font-weight: 400;
}
.metric {
  font-size: 14px;
}

.metricName {
  font-weight: 300;
  margin-right: 20px;
}

`;

export default Profile
