import React, { useEffect } from "react";
import "./ProductsContainer.css";
import Product from "../UI/ProductSection/Product/Product";



function ProductContainer(props) {




  return (
    <div className=" ProductContainer-div ">

      <h1>{props.catagorieName}</h1>

      {
        props.products.map((val) => {
          return <Product
            key={val.id}
            details={{
              name: val.name,
              price: val.price,
              desc: val.desc,
              id: val.id,
              img: val.img,
              type: val.type,
              quantity: props.cartDataObj[val.name] !== undefined ? props.cartDataObj[val.name] : 0
            }}
          />
        })
      }






    </div>
  );
}

export default ProductContainer;
