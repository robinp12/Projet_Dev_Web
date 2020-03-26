import React, {useEffect, useState} from "react";
import axios from 'axios';
const ConferencePage = props => {

    const [conferences, setConferences] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/conferences")
            .then(response => response.data["hydra:member"])
            .then(data => setConferences(data))
            .catch(error => console.log(error.response));
    }, []);

    const handleDelete = id => {
        const originalConferences = [...conferences];
        setConferences(conferences.filter(conference => conference.id !== id));

        axios
            .delete("http://localhost:8000/api/conferences/" + id)
            .catch(error => {
                setConferences(originalConferences)
            });
    };

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
                        <td>
                            <button onClick={() => handleDelete(conference.id)} className="btn btn-sm btn-danger">Supprimer</button>
                        </td>
                    </tr>
                 )}
            </tbody>
        </table>
    </>)
}

export default ConferencePage;