import React from "react"
import Logo from './img/logo.png'
import Relogio from "./Relogio"

function Header() {
    return (
        <header>
            <img src={Logo} />
            <h1>Eron</h1>
            <Relogio />
        </header>
    )
}
export default Header