import React, {useEffect, useState} from "react";
import axios from 'axios';
import Header from "../components/Header";
import Fields from "../components/forms/Fields"

const AddConference = () => {
    return (
        <>
        <div className="add">
                <Fields className name={"Nom"} label={"Nom"} placeholder={"Nom"} />
                <Fields name={"Description"} label={"Description"} placeholder={"Description"} type={"textarea"}/>
                <div className="row">
                    <div className="col-lg-6">
                        <Fields name={"start"} label={"Heure de début"} placeholder={"Début"} type={"time"}/>
                    </div>
                    <div className="col-lg-6">
                        <Fields name={"end"} label={"Heure de fin"} placeholder={"Fin"} type={"time"}/>
                    </div>
                </div>
        </div>
        <br/>
        </>
    )
}
const ConferencePage = props => {

    const [conferences, setConferences] = useState([]);
    const [show, setShow] = useState(false);

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
        <Header title={"Liste des conférences"} other={<button className="btn btn-outline-primary" onClick={() => setShow(!show)}>Ajouter conférence</button>}/>
        {show && <AddConference/>}
        <div className="row justify-content-center">

        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
        <table className="table table-hover">
            <thead className="bg-light">
                <tr>
                    <th className="text-center">Identifiant</th>
                    <th>Nom</th>
                    <th>Description</th>
                    {/*<th>heure de début</th>*/}
                    {/*<th>heure de fin</th>*/}
                    <th className="text-center">\</th>
                </tr>
            </thead>
            <tbody>
                {conferences.map(conference =>
                    <tr key={conference.id}>
                        <td className="text-center">{conference.id}</td>
                        <td>{conference.name}</td>
                        <td>{conference.description}</td>
                        {/*<td>{conference.getHourFormat}</td>*/}
                        {/*<td>{conference.hourEnd}</td>*/}
                        <td className="text-center">
                            <button onClick={() => handleDelete(conference.id)} className="btn btn-sm btn-danger">Supprimer</button>
                        </td>
                    </tr>
                 )}
            </tbody>
        </table>
        </div>
        </div>
    </>)
}

export default ConferencePage;