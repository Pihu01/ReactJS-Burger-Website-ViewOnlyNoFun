import React from "react";
import aboutimage from "../../public/images/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          laborum iure sunt accusamus? Id ullam dolores assumenda autem quod?
          Nesciunt, pariatur aliquid? Alias, labore? Eos possimus nesciunt
          dolores ratione asperiores!
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  );
};

export default About;
