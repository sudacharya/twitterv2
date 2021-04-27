import styled, {createGlobalStyle} from 'styled-components';
import { GoVerified } from "react-icons/go";
const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap');

* {
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
  }
html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    background: #fff;
    color: #333;
}
`;

export const Container = styled.div`
margin: 0 auto;
padding: 0 50px;
max-width: 1300px;
width: 100%;
@media (max-width:400px){
    padding: 0 10px;
}
@media (max-width:991px) {
    padding: 0 30px;
}
@media (min-width: 1500px) {
    max-width: 1100px;
}
@media (min-width: 1800px) {
    max-width: 1200px;
    padding: 0 30px;
}
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
border-radius: ${({bigRadius}) => bigRadius ? '30px': '20px'};
background-color: #fff;
color: #000;
padding: ${({big}) => big? '18px 30px' : '10px 10px'};
font-size: ${({bigFont}) => bigFont? '20px': '18px'};
outline: none;
cursor: pointer;
border: none;
width: 200px;
transition: all .5s ease;
&:hover{
    background-color: rgba(29, 161, 242, 0.1);
    transform: translateY(-.5rem) scale(1.02);
    color: #000;
}
&:active{
    transform: translateY(.5rem);
}

@media only screen and (max-width:1000px) {
    /* width: 100%; */
    padding: ${({big}) => big? '18px 30px' : '10px 20px'};
}
@media only screen and (max-width:375px) {
    padding: ${({big}) => big? '12px 20px' : '10px 20px'};
    font-size: ${({bigFont}) => bigFont? '16px': '18px'};
}
`;

export const OutlineButton = styled.button`
border-radius: ${({bigRadius})=> bigRadius? '40px' : '30px'};
border: 2px solid #333;
color: #333;
outline: none;
padding: ${({big}) => big? '15px 60px' : '13px 55px'};
font-size: ${({fontBig}) => fontBig? '22px':'18px'};
transition: all .5s ease;
background-color: #fefefe;


&:hover {
    background-color: rgba(29, 161, 242, 0.5);
    color: #fff;
    border: none;
    transform: translateY(-.5rem) scale(1.02);
}
&:active{
    transform: translateY(.5rem);
}
@media only screen and (max-width: 1200px) {
    border-radius: ${({bigRadius})=> bigRadius? '20px' : '18px'};
    padding: ${({big}) => big? '9px 30px' : '8px 28px'};
    font-size: ${({fontBig}) => fontBig? '18px':'16px'};
}
`;

export const Footer = styled.footer`
    margin-top: 200px;
`;

export const Verified = styled(GoVerified)`
  color: #1DA1F2;
  margin-left: 5px;
  font-size: 15px;
  align-self: center;
`;

export default GlobalStyles;