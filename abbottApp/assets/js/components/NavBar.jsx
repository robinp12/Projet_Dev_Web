import React, { useContext } from 'react';
import authAPI from "../services/authAPI";
import {NavLink} from "react-router-dom";
import AuthContext from "../contexts/authContext";

const Navbar = ({ history }) => {

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const handleLogout = () => {
        authAPI.logout();
        setIsAuthenticated(false);
        history.push("/login");
    };
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to={"/"}>
                Abbott
            </NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor02"
                aria-controls="navbarColor02"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                {authAPI.isAuthenticated() && (
                            <>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to={"/conferences"}>
                            Conferences
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/userAccess"}>
                            Gestion des accès
                        </NavLink>
                    </li>
                    </>)}
                </ul>
                <ul className="navbar-nav ml-auto">
                    {!isAuthenticated && <>
                        <li className="nav-item">
                            <NavLink to={"/register"} className="btn btn-light ml-2 mr-2">
                                Inscription
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/login"} className="btn btn-light ml-2 mr-2">
                                Connexion
                            </NavLink>
                        </li>
                    </> ||
                    <li className="nav-item">
                        <button onClick={handleLogout} className={"btn btn-outline-light"}>Déconnexion</button>
                    </li>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
