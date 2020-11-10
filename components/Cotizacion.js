import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
color: #fff;
`;

const Parrafo = styled.p`
font-size: 30px;
`;

const Precio = styled.p`
font-size: 18px;
`;


const Cotizacion = ({resultado}) => {
    if (Object.keys(resultado).length === 0) return null;

    console.log(resultado)

return(
    <ResultadoDiv>
        <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
        <Parrafo>El precio mas ALTO del dia: <span>{resultado.HIGHDAY}</span></Parrafo>
        <Parrafo>El precio mas Bajo: <span>{resultado.LOWDAY}</span></Parrafo>
        <Parrafo>El precio de las ultimas 24 hs: <span>{resultado.CHANGEPCT24HOUR}</span></Parrafo>
        <Parrafo>El ultimo precio es: <span>{resultado.LASTUPDATE}</span></Parrafo>
    </ResultadoDiv>
);
}


export default Cotizacion;