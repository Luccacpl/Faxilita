import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link, } from 'react-router-dom';

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
                      <Button variant="contained" color="primary" className="btnContratante">Contratante</Button>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Link to="/cadastro/2" className="link1">
                    <Button variant="contained" color="primary" className="btnTrabalhador">Trabalhador</Button>
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