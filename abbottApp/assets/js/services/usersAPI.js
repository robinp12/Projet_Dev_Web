import axios from 'axios';

function findAll() {
    return axios
        .get("http://localhost:8000/api/users")
        .then(response => response.data["hydra:member"]);
}

function create (user){
    return axios
        .post("http://localhost:8000/api/users", user);
}

function update(id, user){
    return axios.put("http://localhost:8000/api/users/" + id, user);
}

function deleteUser(id){
    return axios.delete("http://localhost:8000/api/users/" + id);
}


function findUnaccepted(){
    return axios
        .get("http://localhost:8000/api/users?isAccepted=false")
        .then(response => response.data["hydra:member"]);
}

function getInfosUser(id){
    return axios.get("http://localhost:8000/getInfosUser/"+id)
        .then(response => response.data);
}

function postInfosUser(obj){
    return axios.post("http://localhost:8000/postInfosUser", obj)
}

export default {
    findAll, create, update, deleteUser, findUnaccepted, getInfosUser, postInfosUser
}