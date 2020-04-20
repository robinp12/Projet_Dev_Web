import React,{ useState, useContext, useEffect} from 'react';
import authAPI from "../services/authAPI";
import AuthContext from "../contexts/authContext";
import Field from "../components/forms/Fields";
import axios from "axios";

const LoginPage = ({ history}) => {
    const {setIsAuthenticated} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        username: "simon.mohimont@hotmail.com",
        password: "password",
    });

    // Gestion des champs
    const handleChange = ({currentTarget}) => {
        const {value, name} = currentTarget;
        setCredentials({...credentials, [name]: value});
    };

    const [error, setError] = useState("");

    // Gestion du submit
    const handleSubmit =  async (event) => {
        event.preventDefault();
        try {
            const firstResponse = await Promise.all([
                    axios.post("http://localhost:8000/api/login_check", credentials),
                ]
            )
            const token = firstResponse[0]["data"]["token"];
            window.localStorage.setItem("authToken", token);
            authAPI.setAxiosToken(token);
            const secondResponse = await axios.get("http://localhost:8000/api/users?email="+ credentials["username"]);
            const isAccepted = secondResponse["data"]["hydra:member"][0]["isAccepted"];
            if (isAccepted == false){
                setError("L'utilisateur n'a pas encore été accepté par un administrateur");
                authAPI.logout();
            } else {
                setError("");
                setIsAuthenticated(true);
                history.replace("/");
            }
        } catch (e) {
            setError("Le nom d'utilisateur et le mot de passe ne correspondent pas");
        }
    };

    return (
        <>
            <h1>Connexion à l'app</h1>

            <form action="" onSubmit={handleSubmit}>
                <Field label={"Adresse email"} name={"username"} value={credentials.username}
                       placeholder={'Adresse email de Connexion'} onChange={handleChange} type={"email"} error={error}/>
                <Field label={"Mot de passe"} name={"password"} value={credentials.password} onChange={handleChange}
                       type={"password"} error={""}/>
                <div className="form-group">
                    <button type={"submit"} className={"btn btn-success"}>Se connecter</button>
                </div>
            </form>
        </>
    );
};

export default LoginPage;