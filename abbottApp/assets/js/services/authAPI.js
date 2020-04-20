import axios from 'axios';
import jwtDecode from 'jwt-decode';

function logout() {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers["Authorization"];
}

// function authenticate (credentials){
//     console.log(credentials);
//     axios.all([
//         axios.post("http://localhost:8000/api/login_check", credentials),
//         axios.get("http://localhost:8000/api/users?email="+ credentials["username"]),
//     ]).then(axios.spread((...responses) => {
//         console.log("a");
//         const isAccepted = responses[1]["data"]["hydra:member"][0]["isAccepted"];
//         const token = responses[0]["data"]["token"];
//         console.log("aa");
//         console.log(token);
//         console.log(isAccepted);
//         if (typeof token == 'undefined'){
//             console.log("token");
//             return false;
//         }
//         if (isAccepted == false){
//             console.log("refused");
//             return "refused";
//         } else {
//             console.log("accepted");
//             window.localStorage.setItem("authToken", token);
//             setAxiosToken(token);
//             return "accepted";
//         }
//     })).catch(errors => {
//         console.log(errors.response);
//     })
// }

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

function getUserInfo(){
    const token = window.localStorage.getItem(("authToken"));

    if (token) {
        const {username: user} = jwtDecode(token);
        return axios
            .get("http://localhost:8000/api/users?email="+user)
            .then(response => response.data["hydra:member"]);
    }
}

function isAuthenticated(){
    const token = window.localStorage.getItem(("authToken"));
    console.log(token);
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
    authenticate, logout, setup, isAuthenticated, getUserInfo, setAxiosToken
};