import React, { useEffect, useState } from 'react';
// CONTEXT
const GetDataFromLocalCTX = React.createContext();



// PROVIDER
const GetDataFromLocalProvider = (props) => {

    // State To Send Data
    const [localData, setLocalData] = useState({})

    useEffect(() => {

    }, [])


    return (
        <GetDataFromLocalCTX.Provider value={{}}>
            {props.children}
        </GetDataFromLocalCTX.Provider>
    )
}




export default GetDataFromLocalCTX
export { GetDataFromLocalProvider }