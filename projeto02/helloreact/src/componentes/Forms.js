import React, { useState } from "react";

export default function Forms() {
    let [form, setForm] = useState({ "nome": "", "sobrenome": "", "ano": "" })
    let handleFormChange = (e) => {
        if (e.target.getAttribute('name') == 'fname') {
            setForm({ "nome": e.target.value, "sobrenome": form.sobrenome, "ano": form.ano })
        } else if (e.target.getAttribute('name') == 'fsobre') {
            setForm({ "nome": form.nome, "sobrenome": e.target.value, "ano": form.ano })
        } else if (e.target.getAttribute('name') == 'fano') {
            setForm({ "nome": form.nome, "sobrenome": form.sobrenome, "ano": e.target.value })
        }
    }
    return (
        <div>
            <div className='text-center'>
                <h1>Formulário</h1>
            </div>
            <label>Nome: </label>
            <input type='text' name='fname' value={form.nome} onChange={(e) => handleFormChange(e)}></input><br /><br />
            <label>Sobrenome: </label>
            <input type='text' name='fsobre' value={form.sobrenome} onChange={(e) => handleFormChange(e)}></input><br /><br />
            <label>Ano de Nascimento: </label>
            <input type='text' name='fano' value={form.ano} onChange={(e) => handleFormChange(e)}></input><br /><br /><br />

            <p>Nome digitado: {form.nome}</p>
            <p>Sobrenome digitado: {form.sobrenome}</p>
            <p>Ano de nascimento digitado: {form.ano}</p>
        </div >
    )

}