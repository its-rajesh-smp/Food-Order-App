import React from 'react';
import "./Header.css"
import Outlet from './Outlet/Outlet';

function  Header (props) {
    return ( 
        <div className='container Header-div '>
            <i className='bx bx-menu'></i>
            <h1 className='header_name'>Kolkata Local</h1>
            <Outlet/>
        </div>
     );
}

export default Header;
