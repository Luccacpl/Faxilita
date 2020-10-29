import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CadastroContratante from './pages/CadastroContratante';
import CadastroTrabalhador from './pages/CadastroTrabalhador';
import EsqueceuSenha from './pages/EsqueceuSenha';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/Cadastro" exact component={Cadastro}/>
                <Route path="/Cadastro/1" exact component={CadastroContratante}/>
                <Route path="/Cadastro/2" exact component={CadastroTrabalhador}/>
                <Route path="/RecuperarSenha" exact component={EsqueceuSenha}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;