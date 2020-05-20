import React, {useEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import usersAPI from "../services/usersAPI";
import Field from "../components/forms/Fields";
import {toast} from "react-toastify";


const ProfilPage = () => {

    const [user, setUser] = useState({
        id: "",
        lastName: "",
        firstName: "",
        email: "",
        telephone: "",
        inamiNumber: "",
        speciality: "",
    })


    const [errors, setErrors] = useState({
        lastName: "",
        firstName: "",
        email: "",
        telephone: "",
        inamiNumber: "",
        speciality: "",
    })

    const fetchProfileInfo = async () => {
        const token = window.localStorage.getItem(("authToken"));
        if (token) {
            const {id} = jwtDecode(token);
            try{
                const response = await usersAPI.find(id);
                setUser(response);
            } catch (e) {
                console.error(e);
            }
        }
    }

    const handleChangeUser = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setUser({...user, [name]: value});
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await usersAPI.update(user.id, user);
            toast.success("Profil mis à jour");
            setErrors({});
        } catch (error) {
            if(error.response.data.violations){
                const apiErrors = {};
                error.response.data.violations.forEach(violation => {
                    apiErrors[violation.propertyPath] = violation.message;
                });
                setErrors(apiErrors);
            }
        }
    };

    useEffect(()=> {
        fetchProfileInfo();
    }, []);

    return(
        <>
            <h3 className={"text-center mb-5"}>Profil de {user.lastName} {user.firstName}</h3>
            <form onSubmit={handleSubmit} className={"container"}>
                <div className="row">
                    <div className="col-6">
                        <Field name={"firstName"} label={"Votre prénom"} type={"text"} value={user.firstName} onChange={handleChangeUser} error={errors.firstName}/>
                    </div>
                    <div className="col-6">
                        <Field name={"lastName"} label={"Votre nom"} type={"text"} value={user.lastName} onChange={handleChangeUser} error={errors.lastName}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Field name={"email"} label={"Votre email"} type={"text"} value={user.email} onChange={handleChangeUser} error={errors.email}/>
                    </div>
                    <div className="col-6">
                        <Field name={"telephone"} label={"Votre numéro de téléphone"} type={"telephone"} value={user.telephone} onChange={handleChangeUser} error={errors.telephone}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Field name={"speciality"} label={"Votre spécialité"} type={"text"} value={user.speciality} onChange={handleChangeUser} error={errors.speciality}/>
                    </div>
                    <div className="col-6">
                        <Field name={"inamiNumber"} label={"Votre numéro Inami"} type={"text"} value={user.inamiNumber} onChange={handleChangeUser} error={errors.inamiNumber}/>
                    </div>
                </div>
                <div className="from-group">
                    <button type={"submit"} className="btn btn-success">Enregistrer</button>
                </div>
            </form>
        </>
    );
}

export default ProfilPage;