import React from 'react';
import './Card.css';
import styled from 'styled-components';
import Img from '../../ImgFilter';


const StyledCard = styled.div`
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 2px 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    .type{
        font-weight: 700;
    }
`;

function Card(props) {
    // console.log(props);
    return (
        <StyledCard>
            <Img type={props.cargo.type} />
            <Info>
                <span className='type'>{props.cargo.type}</span>
                <span>{props.cargo.from}</span>
                <span>{props.cargo.value}</span>
            </Info>
            <span>{props.cargo.date}</span>
        </StyledCard>
    );
}

export default Card;
