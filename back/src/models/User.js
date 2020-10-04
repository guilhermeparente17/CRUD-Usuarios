const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    nome: String,
    cpf: Number,
    data_nascimento: String,
    email: String,
    senha: String
})

const User = model('User', UserSchema)

module.exports = User