import styled from 'styled-components'
import Moment from 'react-moment';
import { GoVerified } from "react-icons/go"

export const Image = styled.img`
    width: 100%;
    height: 100%;
    inset: 0px;
    z-index: -1;
    overflow: hidden;
    border-radius: 20px;
    margin-bottom: 20px;   
`;

export const InnerContainer = styled.div`
  margin-left: 10px;
  height: 100%;
`;

export const PublicMetric =  styled.span`
margin-left: 10px;
`;

export const PublicMetricContainer = styled.div`
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
`;

export const Verified = styled(GoVerified)`
  color: #1DA1F2;
  margin-left: 5px;
  font-size: 15px;
`;

export const Posted = styled(Moment)`
  color: #2F4F4F;
  font-weight: 300;
  margin-left: 5px;
`;

export const ProfilePicture = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  @media (max-width: 1000px) {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom : 10px
`;

export const Container = styled.blockquote`
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

export const Title = styled.h3`
  color: #000;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
`;

export const UserId = styled.div`
  color: #2F4F4F;
  font-weight: 400;
  font-size: 14px;
`;

export const Description = styled.p` 
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  margin-bottom: 10px;
`;