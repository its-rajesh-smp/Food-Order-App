import React from 'react';

import React from 'react';
import "./ProductPhotoBtn.css"

function ProductPhotoBtn(props) {
    return (
        <div className="ProductPhotoSide-div-button">

            {/* If Quantity is Not 0 then we have to show the quantity and buttons otherwise i will show only ADD with onclick event */}
            {quantityCount !== 0 && <button onClick={decrement}>-</button>}

            {quantityCount === 0 && <p style={{ cursor: "pointer" }} onClick={increament}>{"ADD"}</p>}

            {quantityCount !== 0 && <p>{quantityCount}</p>}

            {quantityCount !== 0 && <button onClick={increament}>+</button>}

        </div>
    );
}

export default ProductPhotoBtn;
