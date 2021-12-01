import React, { useState } from "react"; //declara o state

function Arquivo(props) {
    let [num, setNum] = useState(10) // declara o state: [nome, setNomeFunçãoQueVaiAlterar]=useState('valor inicial')
    return (
        <p>
            <p>Valor do state num: {num}</p>
            <button onClick={() => setNum(num + 10)}>Soma 10</button>
        </p>
    )//chama a função para alterar o valor do state

}
export default Arquivo