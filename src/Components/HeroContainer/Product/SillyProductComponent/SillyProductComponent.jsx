import React from 'react';
import "./SillyProductComponent.css"

import { img } from '../../../../DATA';



function  ProductPhoto (props) {
    return ( 
        <div className=' ProductPhoto-div '>
            <div className="ProductPhoto-div-img">
                <img src={img} alt="" />
            </div>

            <div className='ProductPhoto-div-button'>
                <button>-</button>
                <p>5</p>
                <button>+</button>
            </div>

        </div>
     );
}

function ProductDetails(props){
    return (
        <div className='ProductDetails-div'>
            <div className="productName">
                <i className='bx bx-checkbox-square'></i>
                <p>Fish Curry</p>
            </div>

            <p className='productDetails-price'>₹<span>295</span></p>

            <p className='desc'>Crispy and tender eggplant fries that are delicious to enjoy as a snack, side or</p>

            <div className="likeShare">
                <button><i className='bx bx-heart'></i></button>
                <button><i className='bx bx-share'></i></button>
            </div>

        </div>
    )
}





export { ProductPhoto,ProductDetails};
