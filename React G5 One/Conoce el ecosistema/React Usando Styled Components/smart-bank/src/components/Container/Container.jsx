import React from 'react';
import './Container.css';
import styled from 'styled-components';

import Title from "../Title/Title";
import Account from "../Account/Account";
import List from '../List/List';


const StyledContainer = styled.div`
    background-color: #f1f1f1;
    min-height: 90vh;
    padding: 0px 15vw;
`;

const StyledContent = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

function Container() {
    return (
        <StyledContainer>
            <Title>Smart Bank</Title>
            <StyledContent className="content">
                <Account />
                <List />
            </StyledContent>
        </StyledContainer>
    );
}

export default Container;
