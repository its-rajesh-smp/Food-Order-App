import React from 'react';
import "./SillyComponents.css"
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function  FlipFlopSwitch (props) {
    return ( 
        <div className=' FlipFlopSwitch-div '>

            <FormControlLabel control={<Switch />} label="Veg" />
            <FormControlLabel control={<Switch />} label="Non-Veg" />


        </div>
     );
}





function DefaultFavourites(props){
    return (
        <div className='DefaultFavourites-div'>
            <img src="https://thrivenow.in/assets/images/share/no-favorites.png" alt="" />
            <p>Like your favourite items now, to order them quickly!</p>
        </div>
    )
}


export  {FlipFlopSwitch,DefaultFavourites} ;
