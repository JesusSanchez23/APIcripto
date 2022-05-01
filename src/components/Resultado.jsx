import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
const DivContainer = styled.div`
display:flex;
color: #FFF;
margin-top:20px;
font-family:'Lato', sans-serif;
gap:20px;
justify-content:center;
align-items:center;
`

const Texto = styled.p`
font-size:18px;
span {
  font-weight:700;
  color: #ff0080;
}
`

const Precio = styled.p`
font-size:25px;
span {
  font-weight:700;
  color: #ff0080;
  
}
`
const Imagen = styled.img`
width:150px;
height:150px;
display:block;
`

const Resultado = ({resultado}) => {

  const {PRICE, HIGHDAY, LOWDAY, IMAGEURL, LASTUPDATE, CHANGEPCT24HOUR} = resultado;
  const imgURL = `https://www.cryptocompare.com/${IMAGEURL}`;

console.log(resultado);
  return (
    <DivContainer>
        {IMAGEURL && <Imagen src={imgURL} alt="imagen" />}
      <div>
        <Precio>Precio: <span>{PRICE}</span></Precio>
        <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación ultimas 24hrs: <span>{CHANGEPCT24HOUR}%</span></Texto>
        <Texto>Última vez actualizado: <span>{LASTUPDATE}</span></Texto>

      </div>
    </DivContainer>
  )
}

export default Resultado