import React, { useContext } from 'react';
import "./SearchBar.css"
import SearchFilterCTX from '../../../../Context/Filter/SearchFilterCTX';

function SearchBar(props) {

    const filterDataCTX = useContext(SearchFilterCTX)

    const sendDataOnType = (value) => {
        filterDataCTX.setFilterData(value)
    }



    return (
        <div className=' SearchBar-div '>
            <input onChange={(e) => { sendDataOnType(e.target.value) }} type="text" placeholder='Search by item name, category' />
            <i className='bx bx-search-alt'></i>
        </div>
    );
}

export default SearchBar;
