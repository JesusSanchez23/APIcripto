import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/monedas"
import { useEffect,useState } from "react"
import Alerta from "../components/Alerta";

const InputSubmit = styled.input`
    background-color: #66a2fe;
    padding:10px;
    width:80%;
    border:none;
    border-radius:10px;
    color:#fff;
    font-size:20px;
    font-weight:700;
    text-transform:uppercase;
    transition:background-color .3s ease;
    display:block;
    margin:0 auto;
    &:hover{
    cursor:pointer;
    background-color: #5d86e5;
    }
`

const Formulario = ({setMonedas}) => {
    const [criptos, setCriptos] = useState([]);
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
    const [criptomoneda, SelectCriptos] = useSelectMonedas('Elige tu Criptomoneda', criptos);
    const [alerta, setAlerta] = useState(false)

   

 useEffect(()=>{
    const consultarAPI=async()=>{
       const  url= `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

        const resultado=await fetch(url);
        const {Data:data} = await resultado.json();
      
        const arrayCripto = data.map(cripto =>{
            const objeto = {
                id:cripto.CoinInfo.Name,
                nombre:cripto.CoinInfo.FullName
            }
            return objeto;
        })

        setCriptos(arrayCripto);
      
    }

    consultarAPI();

 },[])

 const handleSubmit = e => {
    e.preventDefault();
   if([moneda,criptomoneda].includes('')){
       setAlerta(true);
       return;
   }

   setAlerta(false);



   setMonedas({
       moneda,
       criptomoneda
   })
}


  return (

    <>
      {alerta && (<Alerta>Todos los campos son obligatorios</Alerta>)}
    <form onSubmit={handleSubmit}>
        <SelectMonedas/>
        <SelectCriptos/>
        <InputSubmit type="submit" value="Cotizar"/>    
    </form>
    </>
  )
}

export default Formulario