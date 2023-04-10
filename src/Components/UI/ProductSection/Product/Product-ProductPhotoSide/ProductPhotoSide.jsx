import React from "react";
import "./ProductPhotoSide.css";
import ProductPhotoBtn from "./ProductPhotoSide-Btn/ProductPhotoBtn"


function ProductPhoto(props) {



  return (
    <div className=" ProductPhotoSide-div ">
      <div className="ProductPhotoSide-div-img">
        <img src={props.details.img} alt="" />
      </div>

      <ProductPhotoBtn details={props.details} />
    </div>
  );
}



export default ProductPhoto;
