import React from "react";
import Dados from "./Dados"

function Body() {
    let fa = () => { //Arrow functions
        return 'Eron Oliveira'
    }
    let ins = () => {
        return 'oliveira.eron'
    }
    let li = () => {
        return 'Eron de Oliveira Silva'
    }
    let soma = (v1, v2) => {
        return v1 + v2
    }
    return (
        <section>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, velit laborum, labore laboriosam cupiditate odit fugiat dolor eius similique incidunt fuga alias, facilis nulla eum deserunt quae. Corrupti, delectus officia.
            </p>
            <Dados
                face={fa}
                insta={ins}
                linked={li}
                soma={soma}
            />
        </section>
    )

}

export default Body