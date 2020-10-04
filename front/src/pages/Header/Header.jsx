import React from 'react'
import './Header.css'

export default function Header(props){
    return(
        <div>
            <header>
                <h3>{props.titulo}</h3>
            </header>
        </div>
    )
}