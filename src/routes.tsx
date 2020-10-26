import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/Cadastro" component={Cadastro}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;