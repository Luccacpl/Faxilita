import React from 'react';

import '../styles/pages/Cadastro.css'

function Cadastro() {
    return(
        <div id="page-cadastro">
            <h1> Registrar novo usuário </h1>
            <button className="btnContratante"> Contratante </button>
            <button className="btnTrabalhador"> Trabalhador </button>
        </div>
    );
}

export default Cadastro;