import React, { useContext, useEffect, useState } from "react";
import "./ProductPhotoSide.css";
import ProductPhotoBtn from "./ProductPhotoSide-Btn/ProductPhotoBtn";

import { img } from "../../../../../Assets/DATA";

function ProductPhoto(props) {
  return (
    <div className=" ProductPhotoSide-div ">
      <div className="ProductPhotoSide-div-img">
        <img src={img} alt="" />
      </div>

      <ProductPhotoBtn details={props.details} />
    </div>
  );
}

export default ProductPhoto;
