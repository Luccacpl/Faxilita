import React from 'react';
import { Link, } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import '../styles/pages/Login.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: 'white',
    },
    title: {
        textAlign: 'center',
      },
  }),
);

function Login(){
    const classes = useStyles();

    return(
        <div className={`${classes.root} page-login`}>

            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <h1 className={classes.title}>Faxilita</h1>
                </Grid>

                <Grid item xs={12}>
                    <input  placeholder="Username" />
                </Grid>

                <Grid item xs={12}>
                    <input  type="password" placeholder="Password"/>
                    <aside className="asideEsquerda">
                        <Link to="/" className="link1">
                            <p>Esqueceu a senha?</p>
                        </Link>
                    </aside>
                    
                    <aside className="asideDireita">
                        <Link to="/cadastro" className="link2">
                            <p>Ainda não é membro?</p>
                        </Link>
                    </aside>
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" className="btnLogin">Login</Button>
                </Grid>
                
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" className="btnCadastro">Cadastro</Button>
                </Grid>

            </Grid>
        </div>
    );
}

export default Login;
