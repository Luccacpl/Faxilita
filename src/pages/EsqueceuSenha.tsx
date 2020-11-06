import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import '../styles/pages/EsqueceuSenha.css';
import CustomButton from '../components/CustomButton';


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

const botao = {
    width: "75%",
    height: "6.3vh",

    boxshadow: "0 3px 5px 2px rgba(0, 10, 12, 0.3)",
    borderRadius:" 20px",
    
    color:" white",
	fontWeight:" 800",

	margin: "auto 12.5%",
}

const styleBlue = {
    background: "linear-gradient(90deg,rgba(23, 82, 222, 1) 0%, rgba(23, 82, 222, 1) 43%, rgba(29, 91, 242, 1) 100%)",
    marginBottom:" 20px",
}

const stylePink = {
    background: "linear-gradient(114deg,rgba(255, 97, 129, 1) 0%, rgba(255, 97, 129, 1) 50%, rgba(255, 95, 128, 1) 100%)",
    marginBottom: "10px",
}

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
                    <CustomButton text="Enviar Email" style={Object.assign({}, botao, stylePink)}/>
                    <Link to="" className="link">
                        <p>Ainda não recebi o email.</p>
                    </Link>
                </Grid>

                <Grid item xs={12}>
                    <hr />
                </Grid>

                <Grid item xs={12}>
                    <CustomButton text="Login" style={Object.assign({}, botao, styleBlue)}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default EsqueceuSenha;