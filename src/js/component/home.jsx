import React from "react";
import NavBar from "./navbar.jsx";
import Carousel from "./Carousel.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar />
			<Carousel />
			<Cards />
			<Footer />
		</div>
	);
};

export default Home;
