import multer from 'multer';                                                            // importação de biblioteca que lida com imagens
import path from 'path';                                                                // importação do path do Node pra lidar com caminhos da aplicação

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),                       // Colocando o caminho das imagens
        filename: (request, file, cb) => {                                              // Definindo nome do arquivo
            const fileName = `${Date.now()}-${file.originalname}`;                      // mudando nome do arquivo para o horario que ele foi criado + nome original

            cb(null, fileName);                                                         // callback no multer
        }
    })
};