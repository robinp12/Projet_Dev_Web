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
            {authAPI.isAuthenticated() && 
            <>
                {conferences.map((conf,index) => 
                <div key={index} className="card">
                    <div className="card-body">
                    <div className="card-title">{conf.name}</div>
                        <p className="card-text">{conf.description}</p>
                        <p className="card-text">
                            <small className="text-muted">{(index+4)*6} days left
                                <a href="#" className="btn btn-primary float-right mr-3">Voir plus</a>
                            </small>
                        </p>
                    </div>
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