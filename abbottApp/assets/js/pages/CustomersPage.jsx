import React from 'react';

const CustomersPage = (props) => {
    return ( <>
        <h5>Liste des clients<button className="float-right btn btn-outline-primary">Ajouter client</button></h5>
        <hr />
        <br />
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Identifiant</th>
                    <th>Nom</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table> 
        </> );
}
 
export default CustomersPage;