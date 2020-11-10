import React from 'react'
import styled from '@emotion/styled';

const MensajeError = styled.p`
padding: 1rem; 
background-color: red;
color: #fff;
text-align:center;
font-wheigth: bold;
`;


const Error = ({mensaje}) => {
    return (
        <MensajeError>{mensaje}</MensajeError>
    );

}

export default Error;