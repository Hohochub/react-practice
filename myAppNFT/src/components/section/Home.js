import React from 'react';
import styled, { keyframes } from 'styled-components';
import CoverVideo from '../CoverVideo';
import TypeWriterText from '../TypeWriterText';
import RoundTextBlack from "../../Assets/Rounded-Text-Black.png";
import { useWindowScroll } from 'react-use';


const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
width: 100vw;
position: relative;
background-color:${props => props.theme.body};
`;

const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
// background-color: lightblue;

display: flex;
align-items: center;
justify-content: center;

@media (max-width: 64em) {
  width: 85%;
  }

@media (max-width: 48em) { 
  flex-direction: column-reverse;
  width: 100%;

  &>*: first-child {
    width: 100%;
    margin-top: 2rem;
  }
  }


`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const rotate = keyframes`
100% {
  transform: rotate(1turn);
}
`

const Round = styled.div`
  img {
    position: absolute;
    display: flex;
    justify-content: center;
    animation: ${rotate} 6s linear infinite reverse;

    align-items: center;
    border-radius: 50%;
    bottom: 5%;
    left: 8.5%;

    width: 6rem;
    height: 6rem;
    border: 1px solid ${props => props.theme.text};
    border-radius: 50%;

    @media (max-width: 64em) {
      width: 4rem;
      height: 4rem;
      left: none;
      right: 2rem;
      bottom: 100%;
      }

    @media (max-width: 48em) {
      right: 1rem;
      }
  }
`

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;

  align-items: center;
  border-radius: 50%;
  position: absolute;
  bottom: 8.5%;
  left: 10%;

  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  transform: translate(-50%, -50%)
  font-size: ${props => props.theme.fontxl}

  
  @media (max-width: 64em) {
    width: 2rem;
    height: 2rem;
    right: 1rem;
    font-size: ${props => props.theme.fontlg}

    }
`

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box><TypeWriterText/></Box>
        <Box><CoverVideo /></Box>
        <Circle>
          &#x2193;
        </Circle>
        <Round>
          <img src={RoundTextBlack} alt="NFT" />
        </Round>
      </Container>
    </Section>
  )
}

export default Home