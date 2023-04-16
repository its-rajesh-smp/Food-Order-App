import React from 'react';
import "./ProductPage.css"

import PrimaryHeader from "../../Components/UI/ProductSection/PrimaryHeader/PrimaryHeader";
import SelectedCurrentLocation from "../../Components/UI/ProductSection/SelectedCurrentLocation/SelectedCurrentLocation"
import OffersContainer from "../../Components/LandingPage-OffersContainer/OffersContainer"
import Search from "../../Components/UI/ProductSection/Search/Search"
import VegNonVegFilter from "../../Components/UI/ProductSection/VegNonVegFilter/VegNonVegFilter"
import FaviouritesContainer from "../../Components/LandingPage-FaviouritesContainer/FaviouritesContainer"
import CartHoverBtn from '../../Components/UI/ProductSection/CartHoverBtn/CartHoverBtn';
import CatagorieContainer from '../../Components/LandingPage-CatagorieContainer/CatagorieContainer';



function ProductPage(props) {

    return (
        <div className=' ProductPage-div '>

            <PrimaryHeader />
            <SelectedCurrentLocation />
            <OffersContainer />
            <Search />
            <VegNonVegFilter />
            <FaviouritesContainer />
            <CatagorieContainer />
            <CartHoverBtn />


        </div>
    );
}

export default ProductPage;
