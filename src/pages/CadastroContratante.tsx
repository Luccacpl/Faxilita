import React, { useState, ChangeEvent, FormEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { FiPlus, FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import CustomButton from '../components/CustomButton';
import api from '../services/api';

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
    const history = useHistory();

    const [nm_usuario, setNm_usuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nr_celular, setNr_celular] = useState('');
    const [cd_cpf_usuario, setCd_cpf_usuario] = useState('');
    const [dt_nasc_usuario, setDt_nasc_usuario] = useState('');
    const [ds_usuario, setDs_usuario] = useState('');

    const classes = useStyles();

    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = new FormData();

        data.append('nm_usuario', nm_usuario);
        data.append('email', email);
        data.append('senha', senha);
        data.append('nr_celular', nr_celular);
        data.append('cd_cpf_usuario', cd_cpf_usuario);
        data.append('dt_nasc_usuario', dt_nasc_usuario);

        await api.post('usuarios', data);

        alert('Cadastro realizado com sucesso!');

        history.push('/');

        console.log({
            nm_usuario,
            email,
            senha,
            nr_celular,
            cd_cpf_usuario,
            dt_nasc_usuario,
            ds_usuario
        });
    }

    function handleSelectedImages(event: ChangeEvent<HTMLInputElement>) {
        if(!event.target.files){
            return;
        }

        const selectedImages = Array.from(event.target.files);

        setImages(selectedImages);

        const selectedImagesPreview = selectedImages.map(image => {
            return URL.createObjectURL(image);
          });
      
        setPreviewImages(selectedImagesPreview);
    }

    return(
        <div id="page-cadastro-contratante">
            <aside className="app-sidebar">
                <h1>Faxilita</h1>
                <footer>
                    <Link to="/">
                        <button>
                            <FiArrowLeft size={24} color="#FFF" />
                        </button>
                    </Link>
                </footer>
            </aside>

            <main>
                <form onSubmit={handleSubmit} className="wrapper">
                    <Grid container spacing={3}>

                        <Grid item xs={12} className="fixed">
                            <h1 className={classes.Title}>Registrar novo Contratante</h1>
                        </Grid>

                        <Grid item xs={12}>
                            <hr />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="name">Nome</label>
                            <input  placeholder="Ex: José" value={nm_usuario} onChange={event => setNm_usuario(event.target.value)}/>
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Ex: teste@email.com" value={email} onChange={event => setEmail(event.target.value)} />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="email">Confirmação de Email</label>
                            <input type="email" placeholder="Ex: teste@email.com" />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="cpf">CPF</label>
                            <input  placeholder="Ex: 000-000-000-00" value={cd_cpf_usuario} onChange={event => setCd_cpf_usuario(event.target.value)} />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" placeholder="Insira sua senha" value={senha} onChange={event => setSenha(event.target.value)}/>
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="senha">Confirmação de Senha</label>
                            <input type="password" placeholder="Confirme sua senha" />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="celular">Número de celular</label>
                            <input  placeholder="Ex: (13)99999-9999" value={nr_celular} onChange={event => setNr_celular(event.target.value)}/>
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="data">Data de Nascimento</label>
                            <input type="date" placeholder="Data de nascimento" value={dt_nasc_usuario} onChange={event => setDt_nasc_usuario(event.target.value)}/>
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="descricao"> Descrição </label>
                            <input type="text" placeholder="Descrição sobre voce" value={ds_usuario} onChange={event => setDs_usuario(event.target.value)}/>
                        </Grid>

                        
                        <Grid item xs={12}>
                            <label htmlFor="Gender"> Gênero </label>
                            <label htmlFor="male"> Masculino </label>
                            <input type="radio" id="male" name="gender" value="male" />
                            <label htmlFor="female"> Feminino </label>
                            <input type="radio" id="female" name="gender" value="female" />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="Gender"> Tipo de usuario </label>
                            <label htmlFor="male">Contratante </label>
                            <input type="radio" id="male" name="gender" value="Contratante" />
                            <label htmlFor="female"> Trabalhador </label>
                            <input type="radio" id="female" name="gender" value="Trabalhador" />
                        </Grid>
                        

                        <Grid item xs={12} className="fixed">
                                <h1 className={classes.Title}>Insira sua Foto</h1>
                        </Grid>

                        <Grid item xs={12}>
                            <hr />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <div></div>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <label className="custom-file-upload">
                                <FiPlus size={24} color="black"/>
                                <input onChange={handleSelectedImages} type="file">
                                </input>
                            </label>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <div></div>
                        </Grid>

                        <Grid item xs={12}>
                            <CustomButton text="Registrar" style={Object.assign({}, Botao, stylePink)}/>
                        </Grid>

                    </Grid>
                </form>
            </main>
        </div>
    );
}
 
export default CadastroContratante;

/*<div className="images-container">
                                {previewImages.map(image => {
                                        return(
                                            <img key={image} src={image} alt="imagem"/>
                                        )
                                    })}
</div> */


//onChange={event => setNm_usuario(event.target.value)}   ----->    Toda vez que o valor do input mudar, o evento vai acionar uma função chamada setName que vai mudar o valor do State com o valor q foi digitado

// 

// <button type="submit">Registrar</button>