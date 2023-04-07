import React from 'react';
import "./PrimaryHeader.css"
import Outlet from './Outlet/Outlet';

function PrimaryHeader(props) {
    return (
        <div className='container PrimaryHeader-div '>
            <i className='bx bx-menu'></i>
            <h1 className='PrimaryHeader_name'>Kolkata Local</h1>
            <Outlet />
        </div>
    );
}

export default PrimaryHeader;
