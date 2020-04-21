import axios from 'axios';

function findAllConferences() {
    return axios
        .get("http://localhost:8000/api/conferences")
    }
export default{
    findAllConferences
}