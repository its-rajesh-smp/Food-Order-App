import React from 'react';
import "./FaviouritesContainer.css"
import { DefaultFavourites } from '../SillyComponents/SillyComponents';

function FaviouritesContainer(props) {
    return (
        <div className=' YourFavourites-div '>
            <div className='YourFavourites-div-heading'>
                <h3>
                    <i className='bx bxs-heart'></i>
                    Your Favourites
                </h3>
            </div>


            <div className='YourFavourites-container' >
                <DefaultFavourites />

            </div>
        </div>
    );
}

export default FaviouritesContainer;
