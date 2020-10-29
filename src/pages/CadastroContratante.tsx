import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import '../styles/pages/CadastroContratante.css';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    Title: {
      textAlign: 'center',
    },
  }),
);



function CadastroContratante(){
    const classes = useStyles();

    return(
        <div className="wrapper">
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <h1 className={classes.Title}>Registrar novo Contratante</h1>
                </Grid>

                <Grid item xs={6}>
                    <input className="txtNome" placeholder="Nome" />
                </Grid>

                <Grid item xs={6}> 
                    <input className="txtSobrenome" placeholder="Sobrenome" />
                </Grid>

                <Grid item xs={12}>
                    <input type="email" placeholder="Email" />
                </Grid>

                <Grid item xs={12}>
                    <input type="password" placeholder="Senha" />
                </Grid>

                <Grid item xs={12}>
                    <input type="password" placeholder="Confirmação de senha" />
                </Grid>

                <Grid item xs={12}>
                    <input  placeholder="CPF" />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" className="btnCadastro">Registrar</Button>
                </Grid>

            </Grid>
        </div>
    );
}
 
export default CadastroContratante;