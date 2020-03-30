import React, { useEffect,useState } from 'react';
import Countdown from '../components/Countdown';
import axios from 'axios';

const HomePage = props => {
    
    return (
        <>
        <h5>Acceuil</h5>
        <hr />
        <br />
        <div className="text-center">     
            <div className="card">
                <h3>Bienvenue utilisateur</h3>
            </div> 
            <div className="card">    
                <h4>Prochain évènement dans</h4>
                <h4 className="countdown"><i><Countdown day={'May 16, 2020 16:30:59'}/></i></h4>
            </div>
        </div>  
        </>
    )
}

export default HomePage;