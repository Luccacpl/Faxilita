import React, { useState, ChangeEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { FiPlus, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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

    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);

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
                <form className="wrapper">
                    <Grid container spacing={3}>

                        <Grid item xs={12} className="fixed">
                                <h1 className={classes.Title}>Registrar novo Contratante</h1>
                        </Grid>

                        <Grid item xs={12}>
                            <hr />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="name">Nome</label>
                            <input  placeholder="Ex: José" />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="name">Sobrenome</label> 
                            <input  placeholder="Ex: Silva" />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="name">Email</label>
                            <input type="email" placeholder="Ex: teste@email.com" />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="name">Confirmação de Email</label>
                            <input type="email" placeholder="Ex: teste@email.com" />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="name">Senha</label>
                            <input type="password" placeholder="Insira sua senha" />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="name">Confirmação de Senha</label>
                            <input type="password" placeholder="Confirme sua senha" />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="name">Número de celular</label>
                            <input  placeholder="Ex: (13)99999-9999" />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="name">CPF</label>
                            <input  placeholder="Ex: 000-000-000-00" />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor="name">Data de Nascimento</label>
                            <input type="date" placeholder="Data de nascimento" />
                        </Grid>

                        <Grid item xs={12} className="fixed">
                                <h1 className={classes.Title}>Foto</h1>
                        </Grid>

                        <Grid item xs={12}>
                            <hr />
                        </Grid>

                        <Grid item xs={12}>
                            <label className="custom-file-upload">
                                <FiPlus size={24} color="black"/>
                                <input onChange={handleSelectedImages} type="file">
                                </input>
                            </label>
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