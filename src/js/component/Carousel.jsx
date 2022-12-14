import React from "react";
import image1 from "./1000x600/Architectural-Journey-in-Rajasthan-India-7-Day_Itinerary-3.png";
import image2 from "./1000x600/Nasir-2.jpg"
import image3 from "./1000x600/torre_eiffel_full.jpg"

const Carousel = () => {
    return (
<div className="container mt-4 mb-4 w-100% h-90%">
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} className="img-fluid" alt="image1"/>
    </div>
    <div className="carousel-item">
      <img src={image2} className="img-fluid" alt="image2"/>
    </div>
    <div className="carousel-item">
      <img src={image3} className="img-fluid" alt="image3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>


    );
};



export default Carousel;