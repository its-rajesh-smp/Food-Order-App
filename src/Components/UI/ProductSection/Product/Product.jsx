import React from 'react';
import "./Product.css"
import ProductDetailsSide from "./Product-ProductDetailsSide/ProductDetailsSide"
import ProductPhotoSide from "./Product-ProductPhotoSide/ProductPhotoSide"


function Product(props) {



    // console.log("RENDER");

    return (

        <div className=' Product-div '>
            <ProductDetailsSide details={props.details} />
            <ProductPhotoSide details={props.details} />
        </div>

    );
}

export default Product;
