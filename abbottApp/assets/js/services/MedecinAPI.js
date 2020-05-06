import axios from "axios";

function update(id, user){
    return axios.put("http://localhost:8000/api/medecins/" + id, user);
}

export default {
    update
}