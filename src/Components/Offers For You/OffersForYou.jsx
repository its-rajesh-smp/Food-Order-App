import React from 'react';
import "./OffersForYou.css"
import Offers from './Offers/Offers';

function  OffersForYou (props) {
    return ( 
        <div className=' OffersForYou-div '>
            <h3>
                <i className='bx bxs-offer' ></i>
                Offers For You
            </h3>



            <div className='my-offers-div'>
                <Offers/>
                          

            </div>

        </div>
     );
}

export default OffersForYou;
