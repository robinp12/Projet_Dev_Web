import axios from 'axios';

function findAllConferences() {
    return axios
        .get("http://localhost:8000/api/conferences")
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
    findAllConferences, subscribeConference, unSubscribeConference
}