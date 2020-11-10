import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';



const Contenedor = styled.div`
max-width: 900px;
margin: 0 auto;
@media (min-width:992px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
}
`;

const Imagen = styled.img`
max-width:80%;
margin-top: 5rem;
`; 

const Heading = styled.h1`
font-family:'Bebas Neue', cursive;
color: #FFF;
text-align: left;
font-weight:700px;
font-size: 50px;
margin-bottom: 50px;
margin-top: 80px;

&::after{
  content: '';
  width: 100px;
  height: 6px;
  background-color:#66a2fe;
  display:block;
}
`

function App() {
        const [moneda, guardarMoneda] = useState('');
        const [criptoMoneda, guardarCriptomoneda] = useState('');
        const [resultado, guardarResultado] = useState({});
        const [cargando, guardarCargando] = useState(false);

  useEffect( () => {
    
    const cotizarCriptomoneda = async () => {
      //evitamos la ejecucion la primera vez
      if (moneda === "") return;

      //consultar la api para conocer la cotizacion.
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}` ;
      
      const resultado = await axios.get(url);
      
      //muestra el spinner
      guardarCargando(true);
      
      //muestra el resultado
      setTimeout( () => {

        //cambiar el estado de cargando
        guardarCargando(false);

        guardarResultado(resultado.data.DISPLAY[criptoMoneda] [moneda]);
      },3000);
        
    }
    cotizarCriptomoneda();
  },[moneda, criptoMoneda]);
  
  const componente = (cargando) ? <Spinner/> : <Cotizacion resultado={resultado}
  />;
      
    
    return (
      
      <Contenedor>
      <div>
      <Imagen
      src={imagen}
      alt="imagen cripto"
      />
      </div>
      <div>
      <Heading>
        Cotiza Criptomonedas al instante
      </Heading>
      
     <Formulario
      guardarMoneda={guardarMoneda}
      guardarCriptomoneda={guardarCriptomoneda}
     />
     
     {componente}
      </div>
        </Contenedor>
  );
}

export default App;