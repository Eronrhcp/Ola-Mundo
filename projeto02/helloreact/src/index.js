import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //importa o arquivo App que é utilizado dentro do render
import reportWebVitals from './reportWebVitals';

function tick() {
  //O render recebe dois parametros: ReactDOM.render(O que vai ser carregado, onde vai carregar)
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
setInterval(tick, 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
