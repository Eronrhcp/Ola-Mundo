import React from "react";

export default function Carros() {
    /*    let carros = ['HRV', 'Golf', 'Focus', 'Cruze', 'Argo'] 
        let listaCarros = carros.map(
            (c, i) =>
                <li key={i}>{i} - {c}</li>
        )*/
    let carrosOb = [
        { categoria: "Esporte", preço: "110.000,00", modelo: "Golf GTI" },
        { categoria: "Esporte", preço: "120.000,00", modelo: "Camaro" },
        { categoria: "SUV", preço: "85.000,00", modelo: "HRV" },
        { categoria: "SUV", preço: "83.000,00", modelo: "T-Cross" },
        { categoria: "Utilitário", preço: "120.000,00", modelo: "Hillux" },
        { categoria: "Utilitário", preço: "90.000,00", modelo: "Ranger" }
    ]
    let listaCarros = carrosOb.map(
        (a, i) =>
            <li kei={i}>{i} - Modelo: {a.modelo} ({a.categoria}) - Preço: R${a.preço}</li>
    )
    return (
        <div>
            <ul>
                {listaCarros}
            </ul>
        </div>
    )

}