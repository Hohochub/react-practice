import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const LogoText = styled.h1`
font-size: $(props => props.theme.fontxxxl);
transition: all 0.2s ease;

&:hover {
  transform: scale(1.1);
}

@media (max-width: 64em){
font-size: $(props => props.theme.fontxl);

}
`;

const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
            W.
        </Link>
    </LogoText>
  )
}

export default Logo;