import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import DashBoard from './pages/DashBoard'
import Cadastro from './pages/Cadastro/Cadastro'
import ShowUser from './pages/ShowUser'
import Edit from './pages/Edit'


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={DashBoard} />
                <Route path="/cadastro" component={Cadastro} />
                <Route exact path="/edit/:id" component={Edit} />
                <Route exact path="/:id/show" component={ShowUser} />

            </Switch>
        </BrowserRouter>
    )
}
