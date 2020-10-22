import React from 'react';
import { Link, } from 'react-router-dom';

function Login(){
    return(
        <div>
            <h1>Faxilita</h1>

                <input id="username"/>
                <input id="password"/>
                <Link to="">
                    Esqueceu a senha?
                </Link>
                <Link to="">
                    Ainda não é membro?
                </Link>

                <button> Login </button>
                <button> Cadastre-se </button>

        </div>
    );
}

export default Login;