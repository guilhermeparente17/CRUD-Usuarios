const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())

mongoose.connect("mongodb+srv://localhost:root@mongodb.8u4yf.mongodb.net/mongodb?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Banco de dados conectado!'))

app.use(express.json())
app.use(require('./routes'))

app.listen(3333, () => console.log('Servidor rodando!'))