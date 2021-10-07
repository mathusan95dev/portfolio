import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import hamburger from "../assets/images/humburger.png";
import Button from "react-bootstrap/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import spice1 from "../assets/images/spices1.png";
import spice2 from "../assets/images/spices2.png";

import spice3 from "../assets/images/spices3.png";
import vaccine1 from "../assets/images/vaccine1.png";

import vaccine2 from "../assets/images/vaccine2.png";

import spice4 from "../assets/images/spices4.png";
import Fade from "react-reveal/Fade";

const NavBar = () => {
  const [projectCount, setCount] = useState(1);
  const max = 2;

  const next = () => {
    var count = projectCount >= max ? max : projectCount + 1;
    setCount(count);
  };

  const previous = () => {
    var count1 = projectCount <= 1 ? 1 : projectCount - 1;
    setCount(count1);
  };
  return (
    <Container
      fluid
      style={{
        height: "auto",
        background: "#1f2833",
        
      }}
      id="Projects"
    >
      <Row>
        <h3 style={{ color: "#ffff", marginTop: "10px" }}>Projects</h3>
      </Row>
      <Row style={{ height: "10px" }}></Row>

      <Row>
        <Col sm></Col>
        <Col sm>
          <Button onClick={previous}>{"<"}</Button>&ensp;
          <Button>
            <strong>{projectCount}</strong>
          </Button>
          &ensp;
          <Button onClick={next}>{">"}</Button>
        </Col>
        <Col sm></Col>
      </Row>
      <br></br>
      <br></br>
      {projectCount == 1 && (
        <Fade>
          <Row>
            <h4 style={{ color: "#ffff" }}>Spices Expert</h4>
            <a target="_blank" href="http://www.spicesexpert.com/" style={{color:"#ffff"}}>visit</a>
            <Carousel>
              <div>
                <img src={spice1} />
                <div className="d-none d-sm-block">
                  <p className="legend">Dashboard</p>
                </div>
              </div>
              <div>
                <img src={spice2} />
                <div className="d-none d-sm-block">
                  <p className="legend">Manage Products</p>
                </div>
              </div>
              <div>
                <img src={spice3} />
                <div className="d-none d-sm-block">
                  <p className="legend">Manage Orders</p>
                </div>
              </div>
              <div>
                <img src={spice4} />
                <div className="d-none d-sm-block">
                  <p className="legend">Manage Users</p>
                </div>
              </div>
            </Carousel>
          </Row>
        </Fade>
      )}

      {projectCount == 2 && (
        <Fade>
          <Row>
            <h4 style={{ color: "#ffff" }}>Find Your Vaccination Centres</h4><a target="_blank" style={{color:"#ffff"}} href="https://vaxlk.com/">visit</a>
            <Carousel>
              <div>
                <img src={vaccine1} />
              </div>
              <div>
                <img src={vaccine2} />
              </div>
            </Carousel>
          </Row>
        </Fade>
      )}
    </Container>
  );
};

export default NavBar;
