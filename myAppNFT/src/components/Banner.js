import React from 'react';
import styled from 'styled-components';

import img1 from '../Assets/Nfts/bighead.png';
import img2 from '../Assets/Nfts/bighead-1.png';
import img3 from '../Assets/Nfts/bighead-2.png';
import img4 from '../Assets/Nfts/bighead-3.png';
import img5 from '../Assets/Nfts/bighead-4.png';
import img6 from '../Assets/Nfts/bighead-5.png';


const Section = styled.section`
  height: 35rem;
  width: 100vw;
  border-top: 2px solid ${props => props.theme.text};
  border-bottom: 2px solid ${props => props.theme.text};
  background-color: ${props => props.theme.text};
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  
  overflow: hidden;
`

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;

  img {
    width: 15rem;
    height:auto;
  }
`

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxxl};
  text-transform: capitalize;
  color: ${props => props.theme.body};
  z-index: 10;

  padding: 1rem 2rem;
  width: 35%;
  text-shadow: 1px 1px 2px ${props => props.theme.text};;
`

const ButtonContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;
`
const JoinNow = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};

  outline: none;
  border: none;
  font-weight: 600;
  padding: 0.7rem 1.8rem;
  border-radius: 50px;

  width: 150px;
  height: 50px;
  font-size: ${props => props.theme.fontlg};
  cursor: pointer;

  transition: all 0.2s ease;
  position: relative;

&:hover {
    transform: scale(0.9);
}

&::after {
    content: ' ';
    position: absolute;
    top: -22px;
    left: -23px;
    transfrom: translate(-50%, -50%) scale(0);
    // border: 2px solid ${props => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
    margin: 1.2rem;
}

&:hover::after {
    transfrom: translate(-50%, -50%) scale(1);
    padding: 0.1rem;
}
`

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
       <img src={img1} alt="The Weirdos" />
       <img src={img2} alt="The Weirdos" />
       <img src={img3} alt="The Weirdos" />
       <img src={img4} alt="The Weirdos" />
       <img src={img5} alt="The Weirdos" />
       <img src={img6} alt="The Weirdos" />
      </ImgContainer>

      <Title>Join the <br /> weirdos club</Title>
      <ButtonContainer>
        <JoinNow>
          Join Now
        </JoinNow>
      </ButtonContainer>
    </Section>
  )
}

export default Banner