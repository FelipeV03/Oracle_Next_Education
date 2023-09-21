import { React, useState } from 'react';
import './Account.css';

import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";
import { Icono, Box, Btn, Saldo, Detalle } from '../../UI';
import styled from 'styled-components';

const IconoMargin = styled(Icono)`
    margin-top: 2px;
`;

function Account() {

    const [toggleState, untoggle] = useState(true);

    const toggleHandler = () => {
        untoggle((toggleState) => !toggleState);
    };
    return (
        <Box>
            <h2>Cuenta</h2>
            <div className='saldo' style={{fontSize: '26px', padding: '20px 0'}}>
                Saldo disponible
                <span>
                    <Icono src={dinero} alt="Icono de saldo" />
                </span>
                {toggleState ? (
                    <Saldo>
                        <Detalle className="detalle">$</Detalle> 8,621.50
                    </Saldo>
                ) : null}
            </div>

            <Btn onClick={toggleHandler}>
                <IconoMargin
                    src={toggleState ? privado : ojo}
                    alt="Privacidad de saldo"
                />
            </Btn>
        </Box>
    );
}

export default Account;
