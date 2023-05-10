import React, { useState } from 'react';

const SearchFilterCTX = React.createContext({
    setFilterData: () => { },
    setVegNonVeg: () => { },
    filterData: "",
    vegNonVeg: "",

})


const SearchFilterProvider = (props) => {


    const [filterData, setFilterData] = useState("")
    const [vegNonVeg, setVegNonVeg] = useState("All")

    console.log(vegNonVeg);



    return <SearchFilterCTX.Provider value={{ filterData, setFilterData, vegNonVeg, setVegNonVeg }}>
        {props.children}
    </SearchFilterCTX.Provider>
}




export default SearchFilterCTX
export { SearchFilterProvider }