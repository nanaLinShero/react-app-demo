import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '@/pages/home';
import About from '@/pages/about';

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
    </BrowserRouter>
);

export default Routes;