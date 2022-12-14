import React from "react"
import image6 from "./600x300/gettyimages-697853664_web.jpg"
import image7 from "./600x300/header-fm-v2.jpg"
import image8 from "./600x300/images.jpg"
import image9 from "./600x300/vivienda_con_credito_hipotecari_p.jpg"

const Cards = () => {
    return (
<div className="container mt-4 mb-4 w-100% text-center">
    <div className="row">
        <div className="col-sm-6 col-xl-3">

<div className="card mb-3 me-3" style={{width: "18rem"}}>
  <img src={image6} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>
<div className="col-sm-6 col-xl-3">

<div className="card mb-3 me-3" style={{width: "18rem"}}>
  <img src={image7} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>
<div className="col-sm-6 col-xl-3">

<div className="card mb-3 me-3" style={{width: "18rem"}}>
  <img src={image8} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>

<div className="col-sm-6 col-xl-3">

<div className="card mb-3 me-3" style={{width: "18rem"}}>
  <img src={image9} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>

</div>

</div>
    );
};

export default Cards