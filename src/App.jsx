import { useState,useEffect } from "react";
import "../src/index.css";
import styled from "@emotion/styled";
import ImagenCrypto from "./img/imagen-criptos.png";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 34px;
  color: #fff;
  font-weight:700;
  margin-top:80px;
  margin-bottom:50px;
  text-align:center;
  
  &::after{
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin:10px;
    margin: 0 auto;
    margin-top:10px;
  }

`;

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;


  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const { moneda, criptomoneda } = monedas;
  const [resultado, setResultado] = useState({});
  const [spinner, setSpinner] = useState(false);


  useEffect(()=>{
    if(Object.keys(monedas).length > 0){
      const consultarAPI=async()=>{
        setSpinner(true);
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await fetch(url);
        const data = await resultado.json();
        setSpinner(false);
        setResultado(data.DISPLAY[criptomoneda][moneda]);
        // setInfo(data)
      }
      consultarAPI();
    }
  },[monedas])
  

  return (
    <Contenedor>
      <Imagen src={ImagenCrypto} alt="Imagenes criptomonedas" />

      <div>
        <Heading>Cotizador de Cryptos</Heading>
        <Formulario setMonedas={setMonedas}/>
        {spinner && (
        <div class="sk-circle">
        <div class="sk-circle1 sk-child"></div>
        <div class="sk-circle2 sk-child"></div>
        <div class="sk-circle3 sk-child"></div>
        <div class="sk-circle4 sk-child"></div>
        <div class="sk-circle5 sk-child"></div>
        <div class="sk-circle6 sk-child"></div>
        <div class="sk-circle7 sk-child"></div>
        <div class="sk-circle8 sk-child"></div>
        <div class="sk-circle9 sk-child"></div>
        <div class="sk-circle10 sk-child"></div>
        <div class="sk-circle11 sk-child"></div>
        <div class="sk-circle12 sk-child"></div>
      </div>
        )}
        {resultado.PRICE && !spinner && <Resultado resultado={resultado}/>}
      </div>
    </Contenedor>
  );
}

export default App;
