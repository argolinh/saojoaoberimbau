const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

// Configuração do dotenv
dotenv.config();

const app = express();

// Conexão com MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
.catch(err => console.error(err));

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
const attractionsRoutes = require('./routes/attractions');
const usersRoutes = require('./routes/users');

app.use('/api/attractions', attractionsRoutes);
app.use('/api/users', usersRoutes);

// Porta de escuta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));