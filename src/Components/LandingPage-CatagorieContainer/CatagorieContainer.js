import React, { useEffect } from 'react';
import ProductContainer from '../LandingPage-ProductContainer/ProductsContainer';
import "./CatagorieContainer.css"
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFromServer } from '../../Actions/productsAction';

function CatagorieContainer(props) {

    console.log("CATAGORIE RENDER");

    const dispatch = useDispatch()
    // Getting CartData+ProductData From ProductReducer
    const productsData = useSelector(state => state.productsReducer)


    useEffect(() => {
        dispatch(getProductsFromServer())
    }, [])




    // Creating Object and pass to product to update the quantity in O|1| time
    const cartDataObj = {}
    productsData.cartList.forEach((val) => {
        cartDataObj[val.name] = val.quantity
    })



    return (
        <div className=' CatagorieContainer-div '>
            {
                productsData.products.map((val) => {
                    return <ProductContainer cartDataObj={cartDataObj} key={Math.random()} catagorieName={val.catagorieName} products={val.items} />
                })
            }
        </div>
    );
}

export default CatagorieContainer;
