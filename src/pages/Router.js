import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';


import User from './User';
import UserDetail from './UserDetail';
import Postdetail from './Postdetail';
import AlbumDetail from './AlbumDetail';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={User} />
            <Route path="/user/:id" component={UserDetail} />
            <Route path="/posts/:id" component={Postdetail} />
            <Route path="/album/:id" component={AlbumDetail} />
        </BrowserRouter>
    )
}

export default Router
