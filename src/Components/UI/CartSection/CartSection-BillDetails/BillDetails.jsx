import React from 'react';
import "./BillDetails.css"
import { useSelector } from 'react-redux';

function BillDetails() {

    console.log("%cBILL DETAILS RENDER", "color:green");

    const myCartTotal = useSelector(state => state.cartTotalReducer.cartTotal)
    const appliedOffers = useSelector(state => state.offerReducer.appliedOffer)


    const totalPrice = myCartTotal.totalPrice
    let discount = 0
    let tax = 25

    appliedOffers.forEach((val) => {
        switch (val.type) {
            case "discount": {
                discount = val.discount
                break
            }
            case "delivery": {
                tax = 0
                break
            }
        }
    })

    let finalPrice = (totalPrice - discount) + tax

    return (


        <div className='BillDetails-div'>
            <h3>Bill Details</h3>

            <div className='order'>
                <p>Item total</p>
                <p>₹<span>{totalPrice}</span></p>
            </div>

            <div className='tax'>
                <p>Taxes & charges</p>
                <p>₹<span>{tax === 0 ? "FREE" : tax}</span></p>
            </div>

            <div className='offer'>
                <p>Offer</p>
                <p>₹<span>{discount}</span></p>
            </div>

            <div className='total'>
                <p>Bill total</p>
                <p className='totalAmount'>₹<span>{finalPrice}</span></p>
            </div>

        </div>
    )
}


export default BillDetails