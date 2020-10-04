import React, { useState, useEffect } from 'react'
import api from '../services/api'
import {Link} from 'react-router-dom'

export default function DashBoard() {
    useEffect(() => {
        async function loadUsers() {
            const response = await api.get("/users")
            setUsers(response.data)
            console.log(response.data)
        }
        loadUsers()
    }, [])
    const [users, setUsers] = useState([])
    return (
        <div>
            <h1>Pagina de DashBoard</h1>
            {users.map(user => {
                return (
                    <div key={user._id} className="dash">
                        <h1>nome: {user.nome}</h1>
                        <h2>cpf: {user.cpf}</h2>
                        <h2>data de nasicmento: {user.data_nascimento}</h2>
                        <h2>email: {user.email}</h2>
                        <Link to={`/${user._id}/show`}>Mostrar Usuario</Link>
                    </div>
                )
            })}
        </div>
    )
}