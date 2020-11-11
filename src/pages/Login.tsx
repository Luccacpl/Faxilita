import React from 'react';
import { Link, } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import CustomButton from '../components/CustomButton';

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


const Botao = {
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
}

const stylePink = {
    background: "linear-gradient(114deg,rgba(255, 97, 129, 1) 0%, rgba(255, 97, 129, 1) 50%, rgba(255, 95, 128, 1) 100%)",
    marginBottom:" 20px",
}

function Login(){
    const classes = useStyles();

    return(
            <div id="page-login">

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
                            <Link to="/RecuperarSenha" className="link1">
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
                        <Link to="/" className="link2">
                            <CustomButton text="Login" style={Object.assign({}, Botao, styleBlue)}/>
                        </Link>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Link to="/cadastro" className="link2">
                            <CustomButton text="Cadastrar" style={Object.assign({}, Botao, stylePink)} />
                        </Link>
                    </Grid>

                </Grid>
            </div>
    );
}

export default Login;

/* <Button variant="contained" color="primary" className="btnLogin">Login</Button> */