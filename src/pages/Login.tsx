import React from 'react';
import { Link, } from 'react-router-dom';

import '../styles/pages/Login.css';

function Login(){
    return(
        <div id="page-login">
            <main>
                <h1>Faxilita</h1>
            </main>

            <div className="conteudo">
                <input id="username" placeholder="Username" />
                <input id="password" type="password" placeholder="Password"/>
                <Link to="/" className="link">
                    Esqueceu a senha?
                </Link>
                <Link to="/cadastro" className="link">
                    Ainda não é membro?
                </Link>
            </div>

                <button className="btnLogin"> Login </button>
                <button className="btnCadastro"> Cadastre-se </button>

        </div>
    );
}

export default Login;