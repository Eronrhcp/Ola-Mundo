import React from "react";

function Arquivo(props) {
    let [num, setNum] = useState(10)
    return (
        <p>
            <p>Valor do state num: {num}</p>
            <button onClick={() => setNum(num + 10)}>Soma 10</button>
        </p>
    )
}
export default Arquivo