import React from 'react';
import Countdown from '../components/Countdown';

const HomePage = props => {
    return (
        <>
        <div className="text-center">
            <h1>Page D'acceuil</h1>
            <hr />
            <h2>Prochain évènement dans</h2>
            <h2><Countdown /></h2>
        </div>  
        </>
    )
}

export default HomePage;