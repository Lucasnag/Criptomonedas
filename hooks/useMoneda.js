import React, {Fragment, useState} from 'react';

const useMoneda = (label, stateInicial, opciones) =>{
        // state que muestra nuestro hook
        const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <label>{label}</label>
            <select
            onChange={ e => actualizarState(e.target.value)}
            value={state}
            >
                <option value="">-Seleccionar-</option>
                {opciones.map(opcion =>(
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}
                    </option>
                ))}
            </select>
        </Fragment>
    ) 
    ;
    //retornar state y la interfaz que modifica el state
    return [state, Seleccionar, actualizarState];
}

export default useMoneda;

