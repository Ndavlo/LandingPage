import React from "react";

const NavBar = () => {
	return (
<nav class="navbar navbar-expand-lg bg-dark">
<div class="container-fluid">
    <a class="navbar-brand" style={{color: "white"}} href="#">Start Bootstrap</a>
    <div className="float-end">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" style={{color: "white"}} href="#">Home</a>
        <a class="nav-link" style={{color: "grey"}} href="#">About</a>
        <a class="nav-link" style={{color: "grey"}} href="#">Services</a>
        <a class="nav-link" style={{color: "grey"}} href="#">Contact</a>
        </div>
      </div>
    </div>
  </div>
</nav>

	);
};
export default NavBar;