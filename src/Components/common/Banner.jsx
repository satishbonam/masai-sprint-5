import React from "react";

const Banner = (props) => {
  return (
    <div>
      <a href="#/shop" style={{ textDecoration: "none" }}>
        <div
          className="jumbotron jumbotron-fluid"
          style={{
            backgroundImage: `url(${props.img})`,
            backgroundSize: "cover",
            opacity: "0.9",
            color: "white",
            height: "600px",
          }}
        >
          <div className="container">
            <h1 className="display-4">Affenpinscher Breed.</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
            <p>$28.29/mo. or $679 with trade‑in.1</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Banner;
