import React, {useEffect, useState} from "react";
import axios from 'axios';
const ConferencePage = props => {

    const [conferences, setConferences] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/conferences")
            .then(response => response.data["hydra:member"])
            .then(data => setConferences(data));
    }, [])
    return ( <>
        <h1>Liste des conférences</h1>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Identifiant</th>
                    <th>Nom</th>
                    <th>Description</th>
                    {/*<th>heure de début</th>*/}
                    {/*<th>heure de fin</th>*/}
                </tr>
            </thead>
            <tbody>
                {conferences.map(conference =>
                    <tr key={conference.id}>
                        <td>{conference.id}</td>
                        <td>{conference.name}</td>
                        <td>{conference.description}</td>
                        {/*<td>{conference.getHourFormat}</td>*/}
                        {/*<td>{conference.hourEnd}</td>*/}
                    </tr>
                 )}
            </tbody>
        </table>
    </>)
}

export default ConferencePage;