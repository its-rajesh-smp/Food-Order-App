import React from 'react';
import "./FaviouritesContainer.css"
import DefaultFavourites from "../UI/ProductSection/DefaultFavourites/DefaultFavourites"

function FaviouritesContainer(props) {
    return (
        <div className=' FaviouritesContainer-div '>
            <div className='FaviouritesContainer-div-heading'>
                <h3>
                    <i className='bx bxs-heart'></i>
                    Your Favourites
                </h3>
            </div>


            <div className='FaviouritesContainer-container' >
                <DefaultFavourites />

            </div>
        </div>
    );
}

export default FaviouritesContainer;
