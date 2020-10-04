import React, { useState, useEffect } from 'react'
import api from '../services/api'
import {useHistory} from 'react-router-dom'
export default function EditUser(props) {

let {id} = props.match.params

const [user, setUser ] = useState({})
const [nome, setNome] = useState("")
const [cpf, setCpf] = useState()
const [datanascimento, setDataNascimento] = useState("")
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")

const history = useHistory()

async function handleSubmit(e){
    e.preventDefault()
    const response = await api.put(`/users/${id}`,{
        nome,
        cpf,
        data_nascimento: datanascimento,
        email,
        senha
    })
    if(response.status === 200){
        history.push("/dashboard")
    }
}



useEffect(() => {
    async function getUser(){
        const response = await api.get(`/users/${id}`)
        setUser(response.data)
        console.log(response.data)
        
        const {nome,cpf,data_nascimento,email,senha} = response.data
        setNome(nome)
        setCpf(cpf)
        setDataNascimento(data_nascimento)
        setEmail(email)
        setSenha(senha)
    }

    getUser()
}, [])


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Editar Usuario</h1>
                    nome: <input onChange={(e) => setNome(e.target.value)} type="text" value={nome} id="" /><br />
                    cpf: <input onChange={(e) => setCpf(e.target.value)} type="number" value={cpf} id="" /><br />
                    data_nascimento: <input onChange={(e) => setDataNascimento(e.target.value)} type="text" value={datanascimento} id="" /><br />
                    email: <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} id="" /><br />
                    senha: <input type="text" onChange={(e) => setSenha(e.target.value)} value={senha} id="" /><br />
                    <button type="submit">Salvar</button>
            </form>
        </div>
    )
}