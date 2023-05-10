import React from "react";
import "./FlipFlopSwitch.css"

function FlipFlopSwitch(props) {




    return (
        <div className=' FlipFlopSwitch-div '>

            <label htmlFor="VegNonVeg">All</label>
            < input name="VegNonVegSelect" type="radio" value="All" onClick={(e) => { props.onVegNonVegBtnClick(e.target.value) }} />

            <label htmlFor="VegNonVeg">Veg</label>
            < input name="VegNonVegSelect" type="radio" value="Veg" onClick={(e) => { props.onVegNonVegBtnClick(e.target.value) }} />

            <label htmlFor="VegNonVeg">NonVeg</label>
            < input name="VegNonVegSelect" type="radio" value="NonVeg" onClick={(e) => { props.onVegNonVegBtnClick(e.target.value) }} />


        </div>
    );
}


export default FlipFlopSwitch