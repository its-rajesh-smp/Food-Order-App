import React from 'react';
import "./YourFavourites.css"
import { DefaultFavourites } from '../SillyComponents/SillyComponents';

function  YourFavourites (props) {
    return ( 
        <div className=' YourFavourites-div '>
            <div className='YourFavourites-div-heading'>
                <h3>
                 <i className='bx bxs-heart'></i>
                    Your Favourites
                </h3>
            </div>


            <div className='YourFavourites-container' >
                <DefaultFavourites/>

            </div>
        </div>
     );
}

export default YourFavourites;
