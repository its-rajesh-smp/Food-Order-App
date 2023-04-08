import React, { useContext, useEffect, useState } from 'react';
import "./BillDetails.css"

function BillDetails() {



    const total = 0
    const totalPrice = total
    const discount = 0
    const tax = 0
    const finalPrice = (total - discount) + tax


    return (


        <div className='BillDetails-div'>
            <h3>Bill Details</h3>

            <div className='order'>
                <p>Item total</p>
                <p>₹<span>{totalPrice}</span></p>
            </div>

            <div className='tax'>
                <p>Taxes & charges</p>
                <p>₹<span>{tax}</span></p>
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