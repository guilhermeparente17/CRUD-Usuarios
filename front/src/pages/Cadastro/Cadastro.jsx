import React, { useState } from 'react'
import api from '../../services/api'
import './Cadastro.css'
import Header from '../Header/Header'

export default function Cadastro({ history }) {
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState()
    const [datanascimento, setDataNascimento] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();
        try{
            if(nome === "" || cpf === null || datanascimento === "" || email === "" || senha === "" ){
                alert("Preencha todos os campos para se cadastrar")
                
            }
            const response = await api.post("/register", {
                nome,
                cpf,
                data_nascimento: datanascimento,
                email,
                senha
            })
            console.log(response)
            if (response.status === 201) {
                history.push("/dashboard")
            }
        }catch(error){
            console.log(error)
        }
        
    }

    return (
        <div>
            <Header titulo={"Cadastro"} />
            <div className="cadastro">
                <form onSubmit={handleSubmit}>
                    <h1>Pagina de Cadastro</h1>

                    <div className="txtb">
                        <label htmlFor="">Nome</label>
                        <input 
                            placeholder="Insira o nome"
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div className="txtb">
                        <label htmlFor="">CPF</label>
                        <input 
                        placeholder="Insira o cpf"
                        type="number"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                    </div>

                    <div className="txtb">
                        <label htmlFor="">Data de Nascimento</label>
                        <input type="text"
                        placeholder="Insira a data de nascimento"
                            value={datanascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}
                        />
                    </div>

                    <div className="txtb">
                        <label htmlFor="">Email</label>
                        <input 
                        placeholder="Insira o seu email"
                        type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="txtb">
                        <label htmlFor="senha">senha</label>
                        <input 
                        placeholder="Insira a sua senha"
                        type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <button className="botao" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}