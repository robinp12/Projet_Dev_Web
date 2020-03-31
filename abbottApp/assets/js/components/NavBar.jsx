import React, { useContext } from 'react';
import authAPI from "../services/authAPI";
import {NavLink} from "react-router-dom";
import AuthContext from "../contexts/authContext";
import Dropdown from 'react-bootstrap/Dropdown'


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
                data-target="#navbarColor01"
                aria-controls="navbarColor01"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                {isAuthenticated &&
                    <li className="nav-item active">
                        <NavLink className="nav-link" to={"/conferences"}>
                            Conférences
                        </NavLink>
                    </li>
}
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
                    <>
                    <li className="nav-item active">
                    </li>
                    <Dropdown>
                        <Dropdown.Toggle variant="btn btn-outline-light" id="dropdown-basic">
                            Compte
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/customers">Clients</Dropdown.Item>
                            <Dropdown.Item onClick={handleLogout} >Déconnexion</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
