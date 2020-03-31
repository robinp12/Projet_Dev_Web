import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { HashRouter, Switch, Route, withRouter, Redirect } from "react-router-dom";
import ConferencePage from "./pages/ConferencePage";
import LoginPage from "./pages/LoginPage";
import authAPI from "./services/authAPI";
import AuthContext from "./contexts/authContext";
import PrivateRoute from "./components/PrivateRoute";
import RegistryPage from './pages/RegistryPage';
import CustomersPage from './pages/CustomersPage';
import { Jumbotron } from 'react-bootstrap';
import Footer from './components/Footer';

authAPI.setup();

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        authAPI.isAuthenticated()
    );

    const NavBarWIthRouter = withRouter(NavBar);

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            <HashRouter>
                <NavBarWIthRouter/>
                <main className="container">
                    <Jumbotron>
                    <Switch>
                        <Route
                            path="/login"
                            render={ props => <LoginPage onLogin={setIsAuthenticated} {...props}/> }
                        />
                        <PrivateRoute path="/customers" component={CustomersPage} />
                        <Route path="/register" component={RegistryPage} />
                        <PrivateRoute path={"/conferences"} component={ConferencePage}/>
                        <Route path={"/"} component={HomePage}/>
                    </Switch>
                    </Jumbotron>
                    <Footer />
                </main>
            </HashRouter>
        </AuthContext.Provider>
    )
};

const rootElement = document.querySelector("#app");

ReactDOM.render(<App />, rootElement);