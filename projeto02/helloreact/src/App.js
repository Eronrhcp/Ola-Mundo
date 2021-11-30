import React, { useState } from "react"
import Header from "./componentes/Header"
import Body from "./componentes/Body"
import './App.css'
import Relogio from "./componentes/Relogio"
import Arquivo from "./componentes/Arquivo"


function App() {
  let [num, setNum] = useState(10)

  return (
    <>
      <Arquivo />
      <p>Valor do state app: {num}</p>
      <button onClick={() => setNum(num + 10)}>Soma 10</button>
      <Header />
      <Body />
    </>
  )
}

export default App