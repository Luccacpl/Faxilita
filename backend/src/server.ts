import express from 'express';
import { getRepository } from 'typeorm';
import Contratante from './models/Contratante';

import './database/connection';

const app = express();

app.use(express.json());

app.post('/contratantes', async (request, response) => {
    const {
        cd_cpf_contratante,
        nm_contratante,
        dt_nascimento_contratante,
        ds_contratante,
        ic_sexo_contratante,
    } = request.body;

    const contratanteRepository = getRepository(Contratante);

    const contratante = contratanteRepository.create({
        cd_cpf_contratante,
        nm_contratante,
        dt_nascimento_contratante,
        ds_contratante,
        ic_sexo_contratante,
    });

    await contratanteRepository.save(contratante);

    return response.status(201).json(contratante);
});

app.listen(3333);                 //localhost:3333

