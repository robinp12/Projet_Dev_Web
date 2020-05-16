import axios from 'axios';

function findAll() {
    return axios
        .get("http://localhost:8000/api/comments")
        .then(response => response.data["hydra:member"]);
}

function newComment(comment){
    return axios
        .post("http://localhost:8000/api/comments", comment)
}

function deleteComment(id) {
    return axios
        .delete("http://localhost:8000/api/comments/" + id);
}

export default{
    findAll, newComment,  deleteComment
}