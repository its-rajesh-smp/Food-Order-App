import React from 'react';
import "./Product.css"
import { ProductDetails, ProductPhoto } from './SillyProductComponent/SillyProductComponent';


function  Product (props) {

 



    return ( 

        <div className=' Product-div '>
            <ProductDetails details={props.details}/>
            <ProductPhoto  details={props.details} />
        </div>

     );
}

export default Product;
