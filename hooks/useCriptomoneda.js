import React, {Fragment, useState} from 'react';

const useCriptomoneda = (label, stateInicial, opciones) =>{

    //console.log(opciones)
        // state que muestra nuestro hook
        const [state, actualizarState] = useState(stateInicial);

    const SelectCripto = () => (
        <Fragment>
            <label>{label}</label>
            <select
            onChange= {e => actualizarState(e.target.value)}
            value={state}
            >
                <option value="">-Seleccionar-</option>
                {opciones.map(opcion =>(
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
                        {opcion.CoinInfo.FullName}
                    </option>
                ))}
            </select>
        </Fragment>
    );
                
    //retornar state y la interfaz que modifica el state
    return [state, SelectCripto, actualizarState];
}

export default useCriptomoneda;

