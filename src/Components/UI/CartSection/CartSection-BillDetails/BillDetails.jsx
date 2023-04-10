import React, { useContext, useEffect, useState } from 'react';
import "./BillDetails.css"
import AddToCartCTX from "../../../../Context/AddToCart/AddToCartCTX"
import OfferPromoCTX from '../../../../Context/OfferPromoData/OfferPromoCtx';

function BillDetails() {

    // Getting total from addToCartCtx
    const updateTotal = useContext(AddToCartCTX)
    // Getting Offer from OfferPromoCode
    const appliedOffer = useContext(OfferPromoCTX)

    // State to change the bills
    const [billData, setBillData] = useState({ price: 0, quantity: 0, discount: 0 })

    useEffect(() => {
        const localTotalData = updateTotal.totalCart
        const localOffer = appliedOffer.appliedOffer

        // Creating a new Bill with offer price & ...
        const newBillData = {
            price: localTotalData.price,
            quantity: localTotalData.quantity,
            discount: 0
        }

        // If some discount need to applied just check
        if (localOffer !== undefined) {
            newBillData.discount = localOffer.discount
        }

        // Update in DOM
        setBillData(newBillData)
    }, [updateTotal.totalCart])



    const ItemTotal = billData.price
    const totalPrice = ItemTotal
    const discount = billData.discount
    const tax = 25  //Delivery Charges

    // Offer Applied only on more then 200 item price not in the total price
    const finalPrice = ItemTotal >= 200 ? (ItemTotal - discount) + tax : (ItemTotal + tax)


    return (


        <div className='BillDetails-div'>
            {
                ItemTotal > 0 ?
                    <>
                        <h3>Bill Details</h3>

                        <div className='order'>
                            <p>Item total</p>
                            <p>₹<span>{totalPrice}</span></p>
                        </div>

                        <div className='tax'>
                            <p>Delivery charges</p>
                            <p>₹<span>{tax}</span></p>
                        </div>

                        {
                            <div className='offer'>
                                <p>Discount</p>
                                <p>₹<span>{ItemTotal >= 200 ? discount : 0}</span></p>
                            </div>
                        }

                        <div className='total'>
                            <p>Bill total</p>
                            <p className='totalAmount'>₹<span>{finalPrice}</span></p>
                        </div>

                    </>
                    : <h1 className='oopsCartEmpty'>Nothing To Show 😢</h1>
            }
        </div>
    )
}


export default BillDetails