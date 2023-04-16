import React, { useState } from 'react';

const SearchFilterCTX = React.createContext({
    setFilterData: () => { },
    filterData: ""
})


const SearchFilterProvider = (props) => {


    const [filterData, setFilterData] = useState("")




    return <SearchFilterCTX.Provider value={{ filterData, setFilterData }}>
        {props.children}
    </SearchFilterCTX.Provider>
}




export default SearchFilterCTX
export { SearchFilterProvider }