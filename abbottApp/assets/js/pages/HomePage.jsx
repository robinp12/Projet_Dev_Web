import React, { useEffect } from 'react';
import Header from '../components/Header';
import requestAPI from '../services/requestAPI';
import { useState } from 'react';
import authAPI from '../services/authAPI';

const HomePage = props => {

    const [conferences, setConferences] =  useState([]);

     useEffect(() => {
       requestAPI.findAllConferences()
            .then(response => response.data["hydra:member"])
            .then(data => setConferences(data))
            .catch(error => console.log(error.response));
    }, []);
    return (<>
        <Header title={"Futures conférences"}/>
        <div className="justify-content-center row">
            {!authAPI.isAuthenticated() && 
            <>
                {conferences.map(conf => 
                <div className="card">
                    {console.log(conf.name)}
                    <div className="card-header">{conf.name}</div>
                    <div className="card-body"><small>{conf.description}</small></div>
                </div>
                )}
            </> 
            || <h5 className="text-muted">Veuillez vous connecter pour voir les conférences.</h5>
            }
            
        </div>
        </>
        )
}

export default HomePage;