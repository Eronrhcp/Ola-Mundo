import React from "react";

export default function Carros() {
    let carros = ['HRV', 'Golf', 'Focus', 'Cruze', 'Argo']

    let listaCarros = carros.map(
        (c) =>
            <li>{c}</li>
    )
    return (
        <div>
            <ul>
                {listaCarros}
            </ul>
        </div>
    )

}