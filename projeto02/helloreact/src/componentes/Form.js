import React, { useState } from "react";

export default function Form() {
    /*
    let [nome, setNome] = useState('')
    let handleChangeNome = (e) => {
        setNome(e.target.value)
    }
    html
            <div>
            <label>Digite seu Nome: </label>
            <input
                type='text'
                name='fnome'
                value={nome}
                onChange={(e) => handleChangeNome(e)}
            ></input>
            <p>nome digitado: {nome}</p>
        </div>

    let [nome, setNome] = useState('') 
    
    html:
    <label>Digite seu Nome: </label>
    <input
        type='text'
        name='fnome'
        value={nome}
        onChange={(e) => setNome(e.target.value)}
    ></input>
    <p>nome digitado: {nome}</p>*/

    let [nome, setNome] = useState('')
    let [carro, setCarro] = useState()
    return (
        <div>
            <div className='text-center'>
                <h1>Formulário</h1>
            </div>
            <label>Digite seu Nome: </label>
            <input
                type='text'
                name='fnome'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            ></input>
            <p>nome digitado: {nome}</p>
            <label>Escolha um Carro: </label>
            <select
                value={carro}
                onChange={(c) => setCarro(c.target.value)}
            >
                <option value="HRV">HRV</option>
                <option value="Uno">Uno</option>
                <option value="Celta">Celta</option>
                <option value="Palio">Palio</option>
            </select>
            <p>Carro selecionado: {carro}</p>
        </div>
    )
}