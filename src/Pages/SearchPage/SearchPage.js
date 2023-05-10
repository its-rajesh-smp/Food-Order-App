import React from 'react';
import SecondaryHeader from '../../Components/UI/SecondaryHeader/SecondaryHeader';
import VegNonVegFilter from '../../Components/UI/SearchSection/VegNonVegFilter/VegNonVegFilter';
import SearchBar from '../../Components/UI/SearchSection/SearchBar/SearchBar';
import SearchProductsContainer from '../../Components/SearchSection-SearchProductContainer/SearchProductsContainer';
import { SearchFilterProvider } from '../../Context/Filter/SearchFilterCTX';
import { useSelector } from 'react-redux';

function SearchPage(props) {
    const productsData = useSelector(state => state.productsReducer)

    const productsDataArray = []

    const cartDataObj = {}


    productsData.cartList.forEach((val) => {
        cartDataObj[val.name] = val.quantity
    })


    productsData.products.forEach((val) => {
        val.items.forEach((val) => {
            productsDataArray.push(val)
        })
    })



    return (
        <SearchFilterProvider>
            <div className=' SearchPage-div '>
                <SecondaryHeader onClick={"goToProductPage"} icon={<i className='bx bx-search-alt-2'></i>} name="Search" />
                <SearchBar />
                <VegNonVegFilter />
                <SearchProductsContainer cartDataObj={cartDataObj} productsDataArray={productsDataArray} />

            </div>
        </SearchFilterProvider>
    );
}

export default SearchPage;
