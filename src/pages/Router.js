import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

// import Home from './Home';
import User from './User';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={User} />
        </BrowserRouter>
    )
}

export default Router
