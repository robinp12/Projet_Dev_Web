import React, {useEffect, useState} from 'react';
import usersAPI from "../services/usersAPI";
import {toast} from "react-toastify";
import Header from '../components/Header';

const UserAcceptPage = () => {
    const [unacceptedUsers, setUnacceptedUsers] = useState([]);
    const [reload, setReload] = useState(0);

    const findUnacceptedUsers = async () => {
        try {
            const data = await usersAPI.findUnaccepted();
            setUnacceptedUsers(data);
        } catch (error) {
            console.log(error.response);
        }
    }

    const handleDelete = id => {
        const originalUnacceptedUsers = [...unacceptedUsers];
        setUnacceptedUsers(unacceptedUsers.filter(unacceptedUser => unacceptedUser.id !== id));
        try {
            usersAPI.deleteUser(id);
        } catch (error) {
            setUnacceptedUsers(originalUnacceptedUsers);
        }
    };

    const Accept = async (id) => {
        let acceptedUser = unacceptedUsers.filter(unacceptedUser => unacceptedUser.id == id);
        acceptedUser = acceptedUser[0];
        let copyAcceptedUser = JSON.parse(JSON.stringify(acceptedUser));
        copyAcceptedUser["isAccepted"] = true;
        try{
            await usersAPI.update(id, copyAcceptedUser);
            toast.success("L'utilisateur a bien été accepté");
        }catch (e) {
            toast.error("L'acceptation a échoué");
        }
        setReload(reload+1);
    }

    useEffect( () => {
        findUnacceptedUsers();
    }, [reload]);

    return(
        <>
            <Header title={"Liste des utilisateurs demandant l'accès à l'application"}/>
            <div className="row justify-content-center">

        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
        <table className="table table-hover">
            <thead className="bg-light">
                <tr>
                    <th>Nom</th>
                    <th>email</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {unacceptedUsers.map(unacceptedUser =>
                    <tr key={unacceptedUser.id}>
                        <td>{unacceptedUser.lastName + " " + unacceptedUser.firstName}</td>
                        <td>{unacceptedUser.email}</td>
                        <td>
                            <button onClick={() => Accept(unacceptedUser.id)} className="btn btn-sm btn-success mr-3">Accepter</button>
                            <button onClick={() => handleDelete(unacceptedUser.id)} className="btn btn-sm btn-danger">Supprimer</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
            </div>
        </>
    )
}

export default UserAcceptPage;