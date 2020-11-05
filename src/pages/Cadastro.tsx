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
                      <CustomButton text="Contratante"/>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Link to="/cadastro/2" className="link1">
                    <CustomButton text="trabalhador"/>
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