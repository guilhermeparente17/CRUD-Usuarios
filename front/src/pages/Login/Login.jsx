import React, { useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import './Login.css'

export default function Login({ history }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await api.post("/login", {
            email,
            senha: password
        })
        console.log(response)
        if (response.status === 200) {
            history.push("/dashboard")
        }




    }
    return (
        <div className="login">
            <Header titulo={"Usuarios"} />

            <form onSubmit={handleSubmit}>
                
                <div className="login-box">
                <h1>Login</h1>
                    <div className="textbox">
                        <label htmlFor="">Email</label>
                        <input 
                        className="email" 
                        placeholder="Insira seu email" 
                        type="text"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }
                            }

                        />
                    </div>
                    <br />
                    <div className="textbox">
                    <label htmlFor="">senha</label>
                    <input 
                    className="senha"  
                    placeholder="Insira sua senha" 
                    type="password" 
                    value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }
                        }
                    />
                    </div>
                    <br />

                    <button className="btn" type="submit">Entrar</button><br />
                    <Link to="Cadastro"><button className="btn">Cadastrar</button></Link>

                </div>
            </form>

        </div>
    )
}