import axios from 'axios';

function findAllConferences() {
    return axios
        .get("http://localhost:8000/api/conferences")
}
function find(id) {
    return axios
        .get("http://localhost:8000/api/conferences/"+id)
}

function create(conf) {
    return axios
        .post("http://localhost:8000/api/conferences", conf)
}

function subscribeConference(participant){
    return axios
        .post("http://localhost:8000/api/participants", participant)
}

function unSubscribeConference(id) {
    return axios
        .delete("http://localhost:8000/api/participants/" + id);
}

export default{
    findAllConferences, find, create,  subscribeConference, unSubscribeConference
}