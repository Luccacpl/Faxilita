import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import CustomButton from '../components/CustomButton';

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

const Botao = {
    width: "75%",
    height: "6.3vh",

    boxshadow: "0 3px 5px 2px rgba(0, 10, 12, 0.3)",
    borderRadius:" 20px",
    
    color:" white",
	fontWeight:" 800",

	margin: "auto 12.5%",
}

const stylePink = {
    background: "linear-gradient(114deg,rgba(255, 97, 129, 1) 0%, rgba(255, 97, 129, 1) 50%, rgba(255, 95, 128, 1) 100%)",
    marginBottom:" 20px",
}


function CadastroContratante(){
    const classes = useStyles();

    return(
        <div className="wrapper">
            <Grid container spacing={3}>

                <Grid item xs={12} className="fixed">
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
                    <input type="email" placeholder="Confirmação de Email" />
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
                    <input type="date" placeholder="Data de nascimento" />
                </Grid>

                <Grid item xs={12}>
                    <input type="file"></input>
                </Grid>

                <Grid item xs={12}>
                    <CustomButton text="Registrar" style={Object.assign({}, Botao, stylePink)}/>
                </Grid>

            </Grid>
        </div>
    );
}
 
export default CadastroContratante;