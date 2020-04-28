import React, { useEffect } from 'react';
import Header from '../components/Header';
<<<<<<< HEAD
import requestAPI from '../services/requestAPI';
import { useState } from 'react';
import authAPI from '../services/authAPI';
=======
import { useState } from 'react';
import authAPI from '../services/authAPI';
import ConferencesAPI from "../services/ConferencesAPI";
>>>>>>> d2ff85c632eff6deb80991f01e758a5281ad86d6

const HomePage = props => {

    const [conferences, setConferences] =  useState([]);
<<<<<<< HEAD

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
                            <small className="text-muted">1 days left
                                <a href="#/conferencedetails" className="btn btn-primary float-right mr-3">Voir plus</a>
=======
    const [idUser, setIdUser] = useState();
    const [reload, setReload] = useState(0);

    const fetchConferences = async () => {
        const response = await authAPI.getUserInfo();
        setIdUser(response[0].id);
        const data = await ConferencesAPI.findAllConferences()
            .then(response => response.data["hydra:member"])
            .catch(error => console.log(error.response));
        for (let i = 0; i < data.length; i++){
            data[i]["user"] = JSON.parse(JSON.stringify(data[i]["participants"]));
            for (let j = 0; j < data[i]["participants"].length; j++){
                data[i]["user"][j] = data[i]["participants"][j]["user"];
            }
        }
        setConferences(data);
    }

     useEffect(() => {
       fetchConferences()
    }, [reload]);

     const subscribe = async (id) => {
        let participant = {
            user: "/api/users/"+idUser,
            conference: "/api/conferences/"+id,
        }
        await ConferencesAPI.subscribeConference(participant);
         setReload(reload+1);
     }

     const unSubscribe = async (index) => {
         console.log(index);
         let participants = conferences[index]["participants"];
         for (let i = 0; i < participants.length; i++){
            if ("/api/users/"+ idUser == participants[i]["user"]){
                let participantId = participants[i]["id"];
                await ConferencesAPI.unSubscribeConference(participantId);
            }
         }
         setReload(reload+1);
     }

     console.log(conferences);

    return (<>
        <Header title={"Futures conférences"}/>
        <div className="justify-content-center row">
            {authAPI.isAuthenticated() &&
            <>
                {conferences.map((conf,index) =>
                <div key={index} className="card">
                    <div className="card-body">
                    <div className="card-title">
                        <span className={"m-3"}>{conf.name}</span>
                        {!conf["user"].includes("/api/users/"+idUser) &&
                        <button onClick={()=> subscribe(conf.id)} className="btn btn-sm btn-success">S'inscire</button>
                        ||
                        <button onClick={()=> unSubscribe(index)} className="btn btn-sm btn-danger">Se désinscrire</button>
                        }
                    </div>
                        <p className="card-text">{conf.description}</p>
                        <p className="card-text">
                            <small className="text-muted">1 days left
                                <a href="#/conferencedetails" className="btn btn-primary btn-sm float-right mr-3">Voir plus</a>
>>>>>>> d2ff85c632eff6deb80991f01e758a5281ad86d6
                            </small>
                        </p>
                    </div>
                </div>
                )}
<<<<<<< HEAD
            </> 
            || <h5 className="text-muted">Veuillez vous connecter pour voir les conférences.</h5>
            }
            
=======
            </>
            || <h5 className="text-muted">Veuillez vous connecter pour voir les conférences.</h5>
            }

>>>>>>> d2ff85c632eff6deb80991f01e758a5281ad86d6
        </div>
        </>
        )
}

export default HomePage;