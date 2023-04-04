import React from 'react';
import "./ProductPage.css"
import Header from '../Components/Header/Header';
import Cart from '../Components/Cart/Cart';
import SelectedCurrentLocation from '../Components/SelectedCurrentLocation/SelectedCurrentLocation';
import OffersForYou from '../Components/Offers For You/OffersForYou';
import Search from '../Components/Search/Search';
import VegNonVegFilter from '../Components/VegNonVegFilter/VegNonVegFilter';
import YourFavourites from '../Components/YourFavourites/YourFavourites';
import HeroContainer from '../Components/HeroContainer/HeroContainer';

function  ProductPage (props) {
    return ( 
        <div className=' ProductPage-div '>
            
            <Header/>
            <SelectedCurrentLocation/>
            <OffersForYou/>
            <Search/>
            <VegNonVegFilter/>
            <YourFavourites/>
            <HeroContainer/>
            <Cart/>


        </div>
     );
}

export default ProductPage;
