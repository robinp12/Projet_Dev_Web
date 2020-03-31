import React from 'react';
import Header from '../components/Header';

const CustomersPage = (props) => {
    return ( <>
        <Header title={"Liste des clients"} other={<button className="float-right btn btn-outline-primary">Ajouter client</button>}/>

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