import React from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';

const HomePage = props => {
    
    return (
        <>
        <Header title={"Accueil"}/>
            <div className="text-center top">
                <h1>Bienvenue </h1>
            </div> 
            <Cards 
                image={"http://placehold.it/600x200"} 
                title={"Conference 1"} 
                content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maiores adipisci possimus exercitationem ut doloremque, rem corrupti illo, alias unde ducimus, ea cupiditate dolore blanditiis praesentium. Aliquid saepe est ipsa"}
                date={'May 10, 2020 16:30:59'}
            /> 
            
            <Cards 
                image={"http://placehold.it/600x200"} 
                title={"Conference 2"} 
                content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maiores adipisci possimus exercitationem ut doloremque, rem corrupti illo, alias unde ducimus, ea cupiditate dolore blanditiis praesentium. Aliquid saepe est ipsa"}
                date={'May 12, 2020 16:30:59'}
            /> 
            
            <Cards 
                image={"http://placehold.it/600x200"} 
                title={"Conference 3"} 
                content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maiores adipisci possimus exercitationem ut doloremque, rem corrupti illo, alias unde ducimus, ea cupiditate dolore blanditiis praesentium. Aliquid saepe est ipsa"}
                date={'May 14, 2020 16:30:59'}
            /> 
            
            <Cards 
                image={"http://placehold.it/600x200"} 
                title={"Conference 4"} 
                content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maiores adipisci possimus exercitationem ut doloremque, rem corrupti illo, alias unde ducimus, ea cupiditate dolore blanditiis praesentium. Aliquid saepe est ipsa"}
                date={'May 16, 2020 16:30:59'}
            />
        </>
    )
}

export default HomePage;