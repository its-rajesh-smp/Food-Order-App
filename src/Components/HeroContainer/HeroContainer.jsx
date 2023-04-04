import React from 'react';
import "./HeroContainer.css"
import Product from './Product/Product';

function  HeroContainer (props) {
    return ( 
        <div className=' HeroContainer-div '>
            <Product/>
            <Product/>
            <Product/>
        </div>
     );
}

export default HeroContainer;
