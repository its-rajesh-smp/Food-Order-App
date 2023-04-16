import React, { useContext } from 'react';
import "./SearchProductsContainer.css"
import SearchFilterCTX from '../../Context/Filter/SearchFilterCTX';
import Product from '../UI/ProductSection/Product/Product';
function SearchProductsContainer(props) {



    const filterDataCTX = useContext(SearchFilterCTX)
    const filterValue = filterDataCTX.filterData

    // Filter By Search
    const newFilterdData = props.productsDataArray.filter((val) => {
        if (val.name.trim().toLowerCase().includes(filterValue.trim().toLowerCase())) {
            return val
        }
    })


    return (
        <div className=' SearchProductsContainer-div '>
            {
                newFilterdData.map((val) => {
                    return (<Product
                        key={val.id}
                        details={{
                            name: val.name,
                            price: val.price,
                            desc: val.desc,
                            id: val.id,
                            img: val.img,
                            type: val.type,
                            quantity: props.cartDataObj[val.name] !== undefined ? props.cartDataObj[val.name] : 0
                        }} />)
                })
            }
        </div>
    );
}

export default SearchProductsContainer;
