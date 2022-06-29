import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import PestPage from './components/PestPage';

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/pest/:type" component={PestPage} />
            </Switch>
            <img id="logo" src="/newlogo.png" alt="Pest Link logo" />
        </BrowserRouter>
    );
}

export default App;