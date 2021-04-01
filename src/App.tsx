import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";

const App = () => {
    return (
        <Fragment>
            <Navbar/>
            <Route path='/' exact component={HomePage}/>
        </Fragment>
    );
}

export default App;
