import React from 'react';
import "./Outlet.css"

function Outlet(props) {
    return (
        <div className="Outlet-div">
            <p>
                <i className='bx bxs-store'></i>
                <span>Outlet </span>
            </p>

            <p ><span>Kolkata</span><i class='bx bx-chevron-down'></i> </p>
        </div>

    );
}

export default Outlet;
