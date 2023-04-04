import React from 'react';
import "./SillyComponents.css"
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function FlipFlopSwitch(props) {
    return (
        <div className=' FlipFlopSwitch-div '>

            <FormControlLabel control={<Switch />} label="Veg" />
            <FormControlLabel control={<Switch />} label="Non-Veg" />


        </div>
    );
}


// ============================


function DefaultFavourites(props) {
    return (
        <div className='DefaultFavourites-div'>
            <img src="https://thrivenow.in/assets/images/share/no-favorites.png" alt="" />
            <p>Like your favourite items now, to order them quickly!</p>
        </div>
    )
}



// ============================


function CartOffersAndCoupons() {
    return (
        <div className='CartOffersAndCoupons-div'>
            <div className='CartOffersAndCoupons-div-head'>
                <i className='bx bxs-offer'></i>
                <h3>Offers & coupons</h3>
            </div>


            <div className='CartOffersAndCoupons-div-foot'>
                <p>Loyalty rewards & store offers</p>
                <i className='bx bx-chevron-right'></i>
            </div>

        </div>
    )
}

// =================================


function BillDetails() {
    return (
        <div className='BillDetails-div'>
            <h3>Bill Details</h3>

            <div className='order'>
                <p>Item total</p>
                <p>₹<span>2,515</span></p>
            </div>

            <div className='tax'>
                <p>Taxes & charges</p>
                <p>₹<span>125.75</span></p>
            </div>

            <div className='offer'>
                <p>Offer</p>
                <p>₹<span>150</span></p>
            </div>

            <div className='total'>
                <p>Bill total</p>
                <p className='totalAmount'>₹<span>2,640.75</span></p>
            </div>

        </div>
    )
}


// ===========================================

function SillyHeader(){
    return ( 
        <div className='SillyHeader-div '>
            <div className='header'>
                <i className='bx bx-cart-alt'></i>
                <h1 className='header_name'>Cart</h1>
            </div>

            <div>
                <i className='bx bx-x'></i>
            </div>
        </div>
     );
}



export { FlipFlopSwitch, DefaultFavourites, CartOffersAndCoupons, BillDetails,SillyHeader };
