import React from "react";
import { Carousel} from "react-bootstrap";
import Footer from "./Footer";
import NavBar from "./NavBar";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Carousel fade interval={1000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Bkg.jpg"
            alt="First slide"
            width="1240"
            height="600"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="bkg2.jpeg"
            alt="Second slide"
            width="1240"
            height="600"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="bkg3.jpeg"
            alt="Third slide"
            width="1240"
            height="600"
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <div>
        <h1 style={{ textAlign: "center", fontFamily: "-moz-initial" }}>
          <b>Services</b>
        </h1>
        <br />
      </div>

        
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
