import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useState } from 'react';
import authAPI from '../services/authAPI';
import ConferencesAPI from "../services/ConferencesAPI";

const HomePage = props => {

    const [conferences, setConferences] =  useState([]);
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
                <div key={index} className="card border-primary">
                    <div className="card-body">
                    <div className="card-title">
                        <span className={"m-3"}>{conf.name}</span>
                    </div>
                        <p className="card-text" >{conf.description}</p>
                        <p className="card-text">
                            <small className="text-muted">1 days left
                                <a href="#/conferencedetails" className="btn btn-primary btn-sm float-right mr-3">Voir plus</a>
                            {!conf["user"].includes("/api/users/"+idUser) &&
                            <button onClick={()=> subscribe(conf.id)} className="btn btn-sm btn-outline-primary float-right mr-2">S'inscire</button>
                            ||
                            <button onClick={()=> unSubscribe(index)} className="btn btn-sm btn-outline-danger float-right mr-2">Se désinscrire</button>
                            }
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