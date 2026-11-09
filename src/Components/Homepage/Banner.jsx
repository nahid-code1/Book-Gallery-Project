import React from "react";
import heroImage from "../../../src/assets/hero_img.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh] mt-10 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
          <img alt="Hero image for book gallery" src={heroImage} />
          <div>
            <h1 className="text-5xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className="btn btn-success mt-10">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
