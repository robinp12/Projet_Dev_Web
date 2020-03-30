import React from 'react';

const CustomersPage = (props) => {
    return ( <>
        <h5>Liste des clients<button className="float-right btn btn-outline-danger">Ajouter client</button></h5>
        <hr />
        <br />
        <div className="text-center">     
            <h3>Liste des clients</h3>
            <h3 className="countdown"><i></i></h3>
        </div>  
        </> );
}
 
export default CustomersPage;