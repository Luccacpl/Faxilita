import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link, } from 'react-router-dom';

import CustomButton from '../components/CustomButton';

import '../styles/pages/Cadastro.css'

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

  boxShadow:" 0 2px 3px 2px rgba(33, 203, 243, 0.3)",
  borderRadius:" 20px",
  
  color:" white",
}

const styleBlue = {
  background: "linear-gradient(90deg,rgba(23, 82, 222, 1) 0%, rgba(23, 82, 222, 1) 43%, rgba(29, 91, 242, 1) 100%)",
}



function Cadastro() {
    const classes = useStyles();

    return(
        <div className={`${classes.root} page-cadastro`}>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <h1 className={classes.Title}> Registrar novo usuário </h1>
                </Grid>

                <Grid item xs={12} sm={6}>
                   <Link to="/cadastro/1" className="link1">
                      <CustomButton text="Contratante" style={Object.assign({}, Botao, styleBlue)}/>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Link to="/cadastro/2" className="link1">
                    <CustomButton text="trabalhador" style={Object.assign({}, Botao, styleBlue)}/>
                  </Link>     
                </Grid>

                <Grid item xs={12}></Grid>

            </Grid>            
        </div>
    );
}

//<button className="btnContratante"> Contratante </button>
//<button className="btnTrabalhador"> Trabalhador </button>

export default Cadastro;