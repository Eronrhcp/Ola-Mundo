import React from "react"
import Logo from './componentes/img/logo.png'


function App() {
  let sobrenome = "Oliveira"
  let men = "World"
  return (
    <>
      <header>
        <p>Hello {men} React</p>
      </header>
      <p>Eron {sobrenome}</p>
      <img src={Logo} />
    </>
  )
}

export default App