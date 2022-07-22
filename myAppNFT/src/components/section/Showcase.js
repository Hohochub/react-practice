import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import img1 from '../../Assets/Nfts/bighead.png';
import img2 from '../../Assets/Nfts/bighead-1.png';
import img3 from '../../Assets/Nfts/bighead-2.png';
import img4 from '../../Assets/Nfts/bighead-3.png';
import img5 from '../../Assets/Nfts/bighead-4.png';
import img6 from '../../Assets/Nfts/bighead-5.png';
import img7 from '../../Assets/Nfts/bighead-6.png';
import img8 from '../../Assets/Nfts/bighead-7.png';
import img9 from '../../Assets/Nfts/bighead-8.png';
import img10 from '../../Assets/Nfts/bighead-9.png';
import ETH from '../../Assets/icons8-ethereum-48.png';


const Section = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &>*:first-child {
    animation-duration: 20s;

    @media (max-width: 30em){
    animation-duration: 15s;
    }
  }

  &>*:last-child {
    animation-duration: 15s;

    @media (max-width: 30em){
      animation-duration: 10s;
      }
  }
`
const move = keyframes`
  0{transform: translateX(100%)};
  100%{transform: translateX(-100%)};
`


const Row = styled.div`
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;

animation: ${move} linear infinite ${props => props.direction};
`
const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${props => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 48em){
    width: 12rem;
    }
  @media (max-width: 30em){
    width: 10rem;
    }

  img {
  width: 100%;
  height: auto;

}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.body};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span {
  font-size: ${props => props.theme.fontsm};
  color: ${props => props.theme.body};
  font-weight: 600;
  line-height: 1.5rem;
}

h1 {
  font-size: ${props => props.theme.fontsm};
  color: ${props => props.theme.body};
  font-weight: 600;

  @media (max-width: 30em){
    font-size: ${props => props.theme.fontsm};

    }
  
}
`
const Price = styled.div`
display: flex;
justify-contnet: flex-start;
align-items: center;

img {
  width: 1rem;
  height: auto;
}
`

const NftItem = ({img, number=0, price=0, passRef}) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  }
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  }
  return(
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)} >
      <img src={img} alt="The Weirdos" />
      <Details>
        <div>
          <span>Weirdos</span> <br/>
          <h1>#{number}</h1>
        </div>
        <div>
          <span>Price</span> <br/>
          <Price>
            <img src={ETH} alt="ETH" />
            <h1>#{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  )
}

const Showcase = () => {

    const Row1Ref = useRef(null);
    const Row2Ref = useRef(null);

  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} number={857} price={1.2} passRef={Row1Ref} />
        <NftItem img={img2} number={654} price={2.5} passRef={Row1Ref} />
        <NftItem img={img3} number={132} price={3.8} passRef={Row1Ref} />
        <NftItem img={img4} number={456} price={0.5} passRef={Row1Ref} />
        <NftItem img={img5} number={234} price={1.7} passRef={Row1Ref} />
      </Row>

      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={img6} number={745} price={1.1} passRef={Row2Ref} />
        <NftItem img={img7} number={867} price={1.4} passRef={Row2Ref} />
        <NftItem img={img8} number={379} price={2.1} passRef={Row2Ref} />
        <NftItem img={img9} number={268} price={1.2} passRef={Row2Ref} />
        <NftItem img={img10} number={589} price={1.6} passRef={Row2Ref} />
      </Row>
    </Section>
  )
}

export default Showcase