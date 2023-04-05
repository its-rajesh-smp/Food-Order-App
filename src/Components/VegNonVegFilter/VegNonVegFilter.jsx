import React from 'react';
import "./VegNonVegFilter.css"
import { FlipFlopSwitch } from '../SillyComponents/SillyComponents';


function VegNonVegFilter(props) {
    return (
        <div className="flipswitch">
            <FlipFlopSwitch/>
        </div>

    );
}

export default VegNonVegFilter;
