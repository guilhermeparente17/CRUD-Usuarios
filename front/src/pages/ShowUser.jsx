import React, { useState, useEffect} from 'react'
import api from '../services/api'
import { Link, useHistory } from 'react-router-dom'


export default function ShowUser(props){
    const history = useHistory()
    
    const [user, setUser] = useState({})
    useEffect(() => {
        async function getUser(){
            let id = props.match.params.id
            const response = await api.get(`/users/${id}`)
            setUser(response.data)
            console.log(response.data)
        }
        getUser()
        
    },[] )

    async function deleteUser(id){
        const response = await api.delete(`/users/${id}`)
        
        if(response.status === 200){
            history.push("/dashboard")
        }
    }



    
    return(
        <div>
            <h1>Pagina de Show</h1>

            nome: {user.nome} <br/>
            cpf: {user.cpf} <br/>
            data de nascimento: {user.data_nascimento} <br/>
            email: {user.email} <br/>
            <Link to={`/edit/${user._id}`}><button>Editar</button></Link>
            <Link><button onClick={() => deleteUser(user._id)}>Deletar</button></Link>


        </div>
    )
}