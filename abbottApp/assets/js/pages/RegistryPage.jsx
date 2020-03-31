import React, { Component } from 'react';
import Field from '../components/forms/Fields';
import Header from '../components/Header';

class RegistryPage extends Component {
    render(){
        return (
            <>
            <Header title={"Inscription"}/>
                <form action="" onSubmit="">
                    <Field name={"nom"} label={"Nom"} placeholder={"Nom"} error={""} />
                    <Field name={"prenom"} label={"Prenom"} placeholder={"Prenom"} error={""} />
                    <Field name={"mail"} label={"Adresse mail"} placeholder={"Adresse mail"} error={""} />
                    <Field name={"password"} label={"Mot de Passe"} placeholder={"Mot de Passe"} 
                        type={"password"}error={""} />
                    <Field name={"password_confirmation"} label={"Confirmation mot de Passe"} 
                        placeholder={"Mot de Passe"} type={"password"}error={""} />
                    <button type={"submit"} className={"btn btn-success"}>Inscription</button>
                </form>
            </>
        )
    } 
}
export default RegistryPage