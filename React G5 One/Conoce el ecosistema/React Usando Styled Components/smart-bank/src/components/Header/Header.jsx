import React from 'react';
import './Header.css';
import styled from 'styled-components';
import { ColorPrimario } from '../../UI/variables';

import logo from "../../assets/images/logo.svg";

const StyledHeader = styled.nav`
    background-color: ${ColorPrimario};
    display: flex;
    justify-content: space-between;
    padding: 0 15vw;
    height: 10vh;
    align-items: center;
`;

const StyledLogo = styled.img`
    height: 50px;
    width: 50px;
`;

const StyledBtn = styled.a`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid white;
    color: ${(props) => props.primary ? 'white' : ColorPrimario};
    background: ${({primary}) => primary ? 'transparent' : 'white'};
`;

function Header() {
    return (
        <StyledHeader>
            <StyledLogo src={logo} alt="Logo Smart Bank" />
            <div>
                <StyledBtn  href="https://google.com">
                    Ayuda
                </StyledBtn>
                <StyledBtn primary href="https://google.com">
                    Salir
                </StyledBtn>
            </div>
        </StyledHeader>
    );
}

export default Header;
