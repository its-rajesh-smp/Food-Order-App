import React, { useContext, useState } from 'react';
import "./CartItem.css"
import AddToCartCTX from '../../../../Context/AddToCart/AddToCartCTX';

function CartItem(props) {
    const update = useContext(AddToCartCTX)

    const [quantity, setQuantity] = useState(props.quantity)

    /* -------------------------------------------------------------------------- */
    /*                                 INCREAMENT                                 */
    /* -------------------------------------------------------------------------- */

    const increament = () => {
        setQuantity((prev) => {
            update.getDataWhenBTNclick(prev + 1, props)
            return prev + 1
        })
        update.setTotalCart((prev) => {
            return { price: prev.price + props.price, quantity: prev.quantity + 1 }
        })
    }

    /* -------------------------------------------------------------------------- */
    /*                                 DECREAMENT                                 */
    /* -------------------------------------------------------------------------- */
    const decreament = () => {
        if (quantity > 0) {

            setQuantity((prev) => {
                update.getDataWhenBTNclick(prev - 1, props)
                return prev - 1
            })
            update.setTotalCart((prev) => {
                return { price: prev.price - props.price, quantity: prev.quantity - 1 }
            })
        }
    }


    return (
        <div className=' CartItem-div '>

            <div className='CartItem-div-item'>
                <i className='bx bx-checkbox-square'></i>
                <p>{props.name}</p>
            </div>


            <div className='CartItem-div-item-price'>
                <p className='CartItem-div-item-quantity'><span onClick={decreament}>-</span>{quantity}<span onClick={increament}>+</span></p>

                <p onClick={decreament} className='original'><span>{quantity}</span> * <span>{props.price}</span> = <span>{quantity * props.price}</span></p>

                {/* <p className='discount'>{"DISCOUNT"}</p> */}
            </div>
        </div>
    );
}

export default CartItem;
