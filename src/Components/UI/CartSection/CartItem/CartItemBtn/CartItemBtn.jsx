import React, { useState } from "react";
import "./CartItemBtn.css"
import { useDispatch } from "react-redux";
import { addProductToServer } from '../../../../../Actions/productsAction';
import { increamentTotalInServerACT, decreamentTotalInServerACT } from '../../../../../Actions/cartTotalActions';

function CartItemBtn(props) {

    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(props.details.quantity)


    /* -------------------------------------------------------------------------- */
    /*                                 INCREAMENT                                 */
    /* -------------------------------------------------------------------------- */
    const increamentCount = () => {

        const newObject = {
            name: props.details.name,
            id: props.details.id,
            price: props.details.price,
            quantity: quantity + 1
        }

        dispatch(addProductToServer(newObject)).then((val) => {
            if (val === "SUCCESS") {
                dispatch(increamentTotalInServerACT(newObject))
                setQuantity((prev) => prev + 1)
            }
        })

    }

    /* -------------------------------------------------------------------------- */
    /*                                 DECREAMENT                                 */
    /* -------------------------------------------------------------------------- */
    const decreamentCount = () => {
        const newObject = {
            name: props.details.name,
            id: props.details.id,
            price: props.details.price,
            quantity: quantity - 1
        }

        if (quantity - 1 != -1) {
            dispatch(addProductToServer(newObject)).then((val) => {
                if (val === "SUCCESS") {
                    dispatch(decreamentTotalInServerACT(newObject))
                    setQuantity((prev) => prev - 1)
                }
            })
        }


    }



    return (
        <div className=' CartItemBtn-div '>
            <button className='CartItemBtn-div_btn'>
                <p onClick={increamentCount}>+</p>
                <p>{quantity}</p>
                <p onClick={decreamentCount}>-</p>
            </button>

            <p>
                <span className='CartItemBtn_div_quantity'>{quantity}</span> x <span className='CartItemBtn_div_price'>{props.details.price}</span> = <span className='CartItemBtn_div_total'>{quantity * props.details.price}</span>
            </p>
        </div>
    );
}

export default CartItemBtn;
