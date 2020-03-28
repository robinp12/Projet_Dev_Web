import React from 'react';
import Countdown from '../components/Countdown';

const HomePage = props => {
    return (
        <>
        <h5>Acceuil</h5>
        <hr />
        <br />
        <div className="text-center">            
            <h3>Prochain évènement dans</h3>
            <h3 className="countdown"><i><Countdown day={'May 16, 2020 16:30:59'}/></i></h3>
        </div>  
        </>
    )
}

export default HomePage;