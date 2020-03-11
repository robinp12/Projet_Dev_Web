import React from 'react';
import ReactDOM from 'react-dom';
import  { HashRouter, Switch, Route} from "react-router-dom";
import '../css/app.css';
import ConferencePage from "./pages/ConferencePage";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";


const App = () => {
    return (
        <HashRouter>
            <NavBar/>
            <Switch>
                <Route path={"/conferences"} component={ConferencePage}/>
                <Route path={"/"} component={HomePage}/>
            </Switch>
        </HashRouter>
    )
};

const rootElement = document.querySelector("#app");

ReactDOM.render(<App />, rootElement);