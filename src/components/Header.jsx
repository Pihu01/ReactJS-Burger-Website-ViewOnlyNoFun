import React from "react";

const Header = () => {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>It's a Great Time For a Good Taste Of Burger</h3>
        <h1>
          <span>BURGER</span> FOR
          <br /> WEEK
        </h1>
        <p className="details">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="header-btns">
          <a href="#" className="header-btn">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
