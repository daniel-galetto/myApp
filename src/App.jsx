import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [contador,setContador] = useState(0)
  const [mostrar,setMostrar] = useState(false)
  const [texto, setTexto] = useState()


  function contar(){
  setContador(contador + 1)
  }

  useEffect(()=>{

    mostrar ? setTexto("Ocultar") : setTexto("Mostar")

  },[mostrar])

  return (
    <>
     <h1>HOLA MUNDO !!</h1>
     <br />
     <p>{contador}</p>  
     <button onClick={contar}>Sumar contador</button>
     <br />
     <p>{mostrar && "EL TEXTO SE MUESTRA EN PANTALLA"}</p>  
     <button onClick={()=> setMostrar(!mostrar)}>{texto}</button>

    </>   
  )
}

export default App
