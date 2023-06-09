import React from 'react';
import "./ProductPage.css"

import PrimaryHeader from "../../Components/UI/ProductSection/PrimaryHeader/PrimaryHeader";
import SelectedCurrentLocation from "../../Components/UI/ProductSection/SelectedCurrentLocation/SelectedCurrentLocation"
import OffersContainer from "../../Components/LandingPage-OffersContainer/OffersContainer"
import Search from "../../Components/UI/ProductSection/Search/Search"
import VegNonVegFilter from "../../Components/UI/ProductSection/VegNonVegFilter/VegNonVegFilter"
import FaviouritesContainer from "../../Components/LandingPage-FaviouritesContainer/FaviouritesContainer"

import ProductsContainer from "../../Components/LandingPage-ProductContainer/ProductsContainer"


import CartHoverBtn from '../../Components/UI/ProductSection/CartHoverBtn/CartHoverBtn';

function ProductPage(props) {

    return (
        <div className=' ProductPage-div '>

            <PrimaryHeader />
            <SelectedCurrentLocation />
            <OffersContainer />
            <Search />
            <VegNonVegFilter />
            <FaviouritesContainer />
            <ProductsContainer />

            <CartHoverBtn />


        </div>
    );
}

export default ProductPage;
