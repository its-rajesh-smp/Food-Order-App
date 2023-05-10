import React, { useContext } from 'react';
import "./VegNonVegFilter.css"
import FlipFlopSwitch from "../../FlipFlopSwitch/FlipFlopSwitch"
import SearchFilterCTX from '../../../../Context/Filter/SearchFilterCTX';

function VegNonVegFilter(props) {

    console.log("VegNonVegFilter RENDER");
    const vegNonVegFilter = useContext(SearchFilterCTX)

    const onVegNonVegBtnClick = (vegNonVegFilterData) => {
        vegNonVegFilter.setVegNonVeg(vegNonVegFilterData)
    }


    return (
        <div className="flipswitch">
            <FlipFlopSwitch onVegNonVegBtnClick={onVegNonVegBtnClick} />
        </div>

    );
}

export default React.memo(VegNonVegFilter);
