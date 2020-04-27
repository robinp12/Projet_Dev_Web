import axios from 'axios';
import usersAPI from "./usersAPI";
import jwtDecode from 'jwt-decode';

function logout() {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers["Authorization"];
}

function authenticate(credentials){
    console.log(credentials);
    return axios
        .post("http://localhost:8000/api/login_check", credentials)
        .then(response => response.data.token)
        .then(token => {
            window.localStorage.setItem("authToken", token);
            setAxiosToken(token)
        });
}

function getUserInfo(){
    const token = window.localStorage.getItem(("authToken"));

    if (token) {
        const {username: user} = jwtDecode(token);
        return axios
            .get("http://localhost:8000/api/users?email="+user)
            .then(response => response.data["hydra:member"]);
    }
}

function setAxiosToken(token){
    axios.defaults.headers["Authorization"] = "Bearer " + token;
}

function setup(){
    const token = window.localStorage.getItem(("authToken"));

    if (token) {
        const { exp: expiration } = jwtDecode(token);
        if (expiration > new Date().getTime() / 1000) {
            setAxiosToken(token);
        }
    }
}

function isAuthenticated(){
    const token = window.localStorage.getItem(("authToken"));

    if (token) {
        const { exp: expiration } = jwtDecode(token);
        if (expiration > new Date().getTime() / 1000) {
            return true;
        }
        return false;
    }
    return false
}

export default {
    authenticate, logout, setup, isAuthenticated, getUserInfo
};