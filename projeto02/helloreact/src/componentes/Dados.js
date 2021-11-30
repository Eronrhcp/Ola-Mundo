import React from "react";

function Dados(props) {
    let n1 = 10
    let n2 = 5
    return (
        <>
            <p>Facenook:{props.face()}</p>
            <p>Instagram:{props.insta}</p>
            <p>LinkedIn:{props.linked}</p>
            <p>{`A soma de ${n1} com ${n2} é igual a ${props.soma(n1, n2)}`}</p>
        </>
    )

}
export default Dados