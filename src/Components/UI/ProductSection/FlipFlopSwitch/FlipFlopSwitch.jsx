import React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import "./FlipFlopSwitch.css"

function FlipFlopSwitch(props) {
    return (
        <div className=' FlipFlopSwitch-div '>

            <FormControlLabel control={<Switch />} label="Veg" />
            <FormControlLabel control={<Switch />} label="Non-Veg" />


        </div>
    );
}


export default FlipFlopSwitch