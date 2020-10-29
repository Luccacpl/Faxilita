import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import '../styles/pages/EsqueceuSenha.css';


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


function EsqueceuSenha(){
    const classes = useStyles();

    return(
        <div className="wrapper">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={classes.title}>Recuperar sua senha</h1>
                </Grid>

                <Grid item xs={12}>
                    <input className="txtEmail" placeholder="Email" />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" className="btnEnviaremail">Enviar Email</Button>
                    <Link to="" className="link">
                        <p>Ainda não recebi o email.</p>
                    </Link>
                </Grid>

                <Grid item xs={12}>
                    <hr />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" className="btnLogin">LogIn</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default EsqueceuSenha;