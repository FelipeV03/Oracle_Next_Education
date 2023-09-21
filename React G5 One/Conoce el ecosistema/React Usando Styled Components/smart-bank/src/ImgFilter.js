import React from 'react';
import { Icono } from './UI';
import Alimentacion from './assets/images/alimentacion.svg';
import Salud from './assets/images/salud.svg';
import Otros from './assets/images/otros.svg';
import Transporte from './assets/images/transporte.svg';
import Utilidades from './assets/images/utilidades.svg';

const Img = ({type}) => {
    // console.log(props.type);
    // console.log(type);
    const Images = {
        Restaurante: <Icono src={Alimentacion} alt='Restaurante' />,
        Salud: <Icono src={Salud} alt='Salud' />,
        // Otros: <Icono src={Otros} alt='Otros' />,
        Transporte: <Icono src={Transporte} alt='Transporte' />,
        Utilidades: <Icono src={Utilidades} alt='Utilidades' />,
        default: <Icono src={Otros} alt='Otros' />
    };
    return Images[type] || Images['default'];
};

export default Img;
