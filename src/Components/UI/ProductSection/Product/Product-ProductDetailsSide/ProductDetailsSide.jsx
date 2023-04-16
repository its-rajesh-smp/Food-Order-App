import React from "react";
import "./ProductDetailsSide.css"

function ProductDetailsSide(props) {
    return (
        <div className="ProductDetailsSide-div">
            <div className="productName">
                <i style={props.details.type === "NonVeg" ? { color: "red" } : { color: "green" }} className="bx bx-checkbox-square"></i>
                <p>{props.details.name}</p>
            </div>

            <p className="ProductDetailsSide-price">
                ₹<span>{props.details.price}</span>
            </p>

            <p className="desc">{props.details.desc}</p>

            <div className="likeShare">
                <button>
                    <i className="bx bx-heart"></i>
                </button>
                <button>
                    <i className="bx bx-share"></i>
                </button>
            </div>
        </div>
    );
}

export default ProductDetailsSide