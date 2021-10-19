import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';


import User from './User';
import UserDetail from './UserDetail';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={User} />
            <Route path="/user/:id" component={UserDetail} />
        </BrowserRouter>
    )
}

export default Router
