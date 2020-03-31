import React, { useEffect,useState} from "react";
import axios from 'axios';
import Cards from '../components/Cards';
import Header from '../components/Header';

const HomePage = props => {

    const [conferences, setConferences] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/conferences")
            .then(response => response.data["hydra:member"])
            .then(data => setConferences(data))
            .catch(error => console.log(error.response));
    }, []);

    return (
        <>
        <Header title={"Accueil"}/>
            <div className="text-center top">
                <h1>Bienvenue </h1>
            </div> 
            {conferences.map(conference =>
            <Cards key={conference.id}
                image={"https://placehold.co/600x200/"+conference.id*3+1+"9999/FFF"} 
                title={conference.name} 
                content={conference.description}
                date={'May 1'+conference.id*2+', 2020 16:30:59'}
            /> 
        )}
        </>
    )
}

export default HomePage;