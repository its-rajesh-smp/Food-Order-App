import React, { useContext } from 'react';
import "./Search.css"
import PageChangeCTX from '../../../../Context/PageChange/PageChangeCTX';

function Search(props) {

    const changePageCTX = useContext(PageChangeCTX)

    return (
        <div onClick={changePageCTX.goToSearchPage} className=' Search-div '>
            <input disabled type="text" placeholder='Search by item name, category' />
            <i className='bx bx-search-alt'></i>
        </div>
    );
}

export default Search;
