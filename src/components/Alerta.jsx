import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
background-color:#B7322C;
color:#fff;
font-size:22px;
text-transform:uppercase;
font-family:'Lato', sans-serif;
text-align:center;
padding:15px;
font-weight:700;
border-radius:10px;
`

const Alerta = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Alerta