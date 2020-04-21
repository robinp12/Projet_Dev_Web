import React, {useEffect, useState} from 'react';
import usersAPI from "../services/usersAPI";
import {toast} from "react-toastify";

const UserAcceptPage = () => {
    const [unacceptedUsers, setUnacceptedUsers] = useState([]);
    const [reload, setReload] = useState(0);

    const findUnacceptedUsers = async () => {
        try {
            const data = await usersAPI.findAll();
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
            <h1>Liste des utilisateurs</h1>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>email</th>
                    <th>Est accepté ?</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {unacceptedUsers.map(unacceptedUser =>
                    <tr key={unacceptedUser.id}>
                        <td>{unacceptedUser.lastName + " " + unacceptedUser.firstName}</td>
                        <td>{unacceptedUser.email}</td>
                        <td>{unacceptedUser.isAccepted && <i className="fas fa-check"></i> || <i className="fas fa-times"></i>}</td>
                        <td>
                            {unacceptedUser.isAccepted == false &&
                                <>
                                    <button onClick={() => Accept(unacceptedUser.id)}
                                    className="btn btn-sm btn-success mr-3">Accepter</button>
                                    < button onClick={() => handleDelete(unacceptedUser.id)} className="btn btn-sm btn-danger">Supprimer</button>
                                </>
                                ||
                                <>
                                    <button onClick={() => Accept(unacceptedUser.id)}
                                        className="btn btn-sm btn-success mr-3" disabled={true}>Accepter</button>
                                    < button onClick={() => handleDelete(unacceptedUser.id)} className="btn btn-sm btn-danger">Supprimer</button>
                                </>
                                }
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    )
}

export default UserAcceptPage;