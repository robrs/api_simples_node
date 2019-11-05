const express = require('express'); 
const cors = require('cors'); // controla o acesso da api para url externas
const mongoose = require('mongoose'); // conecta com o mongoDB
const requireDir = require('require-dir');// facilitador para importar os arquivos de um diretório

// iniciando a aplicação
const app = express();

app.use(express.json());

app.use(cors());

// iniciando o BD
mongoose.connect(
    'mongodb://localhost:27017/semprenota',
    { useNewUrlParser:true }
);

requireDir('./src/models');

app.use("/api", require("./src/routes"));

app.listen(3001);