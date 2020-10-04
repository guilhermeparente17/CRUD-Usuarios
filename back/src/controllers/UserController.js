const User = require('../models/User')

module.exports = {
    async index(req, res) {
        try{
            const user = await User.find()
            return res.status(200).json(user)
        }catch(error){
            console.log(error)
        }
    },
    async show(req, res) {
        try{
            const { id } = req.params
            const user = await User.findById(id)
            return res.status(200).json(user)

        }catch(error){
            console.log(error)
        }
    },
    async register(req, res) {
        const {nome, cpf, datanascimento, email, senha} = req.body

        
        try {
            if(nome.value === "" || cpf === null || datanascimento === "" || email === "" || senha === ""){
                res.json({message: "Deu erro"})
            }

            /*const userExists = await User.findOne({email: email})
            console.log(userExists)*/
            const user = await User.create({
                nome,
                cpf,
                data_nascimento: datanascimento,
                email,
                senha
            })
            return res.status(201).json(user)
        } catch (error) {
            console.log(error)
        }
    },
    async login(req,res) {
        try {
            const { email, senha } = req.body
            const user = await User.findOne({email})
            if(!user){
                return res.status(404).json({message: "Email não cadastrado!"})
            }
            if(senha !== user.senha){
                return res.status(404).json({ message: "Senha incorreta"})
            }

            return res.status(200).json(user)

        } catch(error) {
            console.log(error)
        }
    },

    async update(req, res) {
        try{
            const { id } = req.params
            const user = await User.findByIdAndUpdate(id, 
                req.body,
                {
                    new: true
                }
            )
            return res.status(200).json(user)
        }catch(error){
            console.log(error)
        }
    },

    async delete(req,res) {
        try{
            const { id } = req.params
            const user = await User.findByIdAndDelete(id)
            return res.json({message: "Usuario deletado com sucesso!"})
        }catch(error){
            console.log(error)
        }
    },
}
