import React from "react";
import "./HeroContainer.css";
import Product from "./Product/Product";



function HeroContainer(props) {





  return (
    <div className=" HeroContainer-div ">


      <Product
        details={{
          name: "Fish Curry",
          price: 256,
          desc: "Crispy and tender eggplant fries that are delicious to enjoy as a snack, side or",
        }}
      />

      <Product

        details={{
          name: "Matar Curry",
          price: 10,
          desc: "Crispy and tender eggplant fries that are delicious to enjoy as a snack, side or",
        }}
      />

      <Product
        details={{
          name: "Chicken Curry",
          price: 11,
          desc: "Crispy and tender eggplant fries that are delicious to enjoy as a snack, side or",
        }}
      />


    </div>
  );
}

export default HeroContainer;
