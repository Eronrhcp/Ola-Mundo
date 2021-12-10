import React from "react";

export default function Notas(props) {

    return (
        <div>
            <legend>Informe a nota: {props.num}</legend>
            <input type="text" value={props.nota} onChange={(e) => props.setNota(e.target.value)}></input>
        </div>
    )

}/* utilizar junto com resultado.js */

/*

import React, { useState } from "react"
import './App.css'
import Notas from "./componentes/Notas"
import Resultado from "./componentes/Resultado"

export default function App() {
  let [nota1, setNota1] = useState(0)
  let [nota2, setNota2] = useState(0)
  let [nota3, setNota3] = useState(0)
  let [nota4, setNota4] = useState(0)
  return (
    <div className='bg-white w-3/5 mx-auto p-5 m-5 border-2 rounded-md border-gray-400'>
      <h1>Soma de Notas</h1>
      <Notas num={1} nota={nota1} setNota={setNota1} />
      <Notas num={2} nota={nota2} setNota={setNota2} />
      <Notas num={3} nota={nota3} setNota={setNota3} />
      <Notas num={4} nota={nota4} setNota={setNota4} />
      <Resultado somaNotas={parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)} />
    </div>
  )
}

*/