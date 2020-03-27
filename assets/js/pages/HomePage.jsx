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
            <h3><i><Countdown /></i></h3> {/*Si t'arrives a faire le décompte gooo x) */}
        </div>  
        </>
    )
}

export default HomePage;