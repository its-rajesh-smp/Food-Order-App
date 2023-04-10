import React from "react";
import "./ProductsContainer.css";
import Product from "../UI/ProductSection/Product/Product";



function ProductContainer(props) {





  return (
    <div className=" ProductContainer-div ">


      <Product
        details={{
          name: "Fish Curry",
          price: 256,
          desc: "Crispy and tender eggplant fries that are delicious to enjoy as a snack, side or",
          img: "https://vismaifood.com/storage/app/uploads/public/daa/96d/7bc/thumb__700_0_0_0_auto.jpg"
        }}
      />

      <Product

        details={{
          name: "Matar Panir",
          price: 10,
          desc: "Crispy and tender eggplant fries that are delicious to enjoy as a snack, side or",
          img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Punjabi-Aloo-Matar-Recipe.jpg"
        }}
      />

      <Product
        details={{
          name: "Chicken Curry",
          price: 11,
          desc: "Crispy and tender eggplant fries that are delicious to enjoy as a snack, side or",
          img: "https://glebekitchen.com/wp-content/uploads/2020/10/acharichickentopbowlserve.jpg"
        }}
      />


    </div>
  );
}

export default ProductContainer;
