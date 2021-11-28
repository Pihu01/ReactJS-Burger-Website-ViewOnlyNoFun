import React from "react";
import Productbox from "./Productbox";
import pimage1 from "../../public/images/s1.png";
import pimage2 from "../../public/images/s2.png";

const Products = () => {
  return (
    <div id="products">
      <h1>CHOOSE & ENJOY!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab
        enim repudiandae nobis velit quo sint similique eum quis ullam sed
        dolor, consequuntur tenetur nemo, itaque alias, minima reiciendis
        incidunt.
      </p>
      <div className="a-container">
        <Productbox image={pimage1} title="Burger" />
        <Productbox image={pimage2} title="Burger" />
        <Productbox image={pimage1} title="Burger" />
      </div>
    </div>
  );
};

export default Products;
