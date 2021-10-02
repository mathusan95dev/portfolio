import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import mathu from "../assets/images/mathu.png";
import mathu2 from "../assets/images/mathu2.jpg";
import github from "../assets/images/github.png";
import facebook from "../assets/images/facebook.png";
import linkedin from "../assets/images/linkedin.png";

import Typing from "react-typing-animation";

const AboutMe = () => {
  return (
    <Container fluid style={{ height: "600px", background: "#0b0c10" }}>
      <Row>
        <Col sm={6}>
          <div className="d-none d-sm-block">
            <Image src={mathu} />
          </div>
        </Col>

        <Col sm={6}>
          <div className="aboutmeTop">
            <div style={{ margin: "0 auto", display: "table" }}>
              <Col xs={6} md={4}>
                <Image
                  src={mathu2}
                  roundedCircle
                  style={{ height: "100px", width: "100px" }}
                  className="d-block d-sm-none"
                />
              </Col>
            </div>
            <Typing loop={true} speed={100} cursorClassName="cursor">
              <div style={{ marginTop: "20px" }}>
                <span>
                  <h1 style={{ color: "#45A29E" }}>Hello I'm Mathusan</h1>
                </span>
              </div>
              <Typing.Reset count={1} delay={1000} />
            </Typing>
          </div>
          <div style={{ marginTop: "40px" }}>
            <span className="intro" style={{ color: "#c5c6c7" }}>
              I'm a Full stack Developer (React + Node.js) with 2+ Years Experience in
              Software Engineering Field
            </span>
          </div>
          <div
            style={{ margin: "0 auto", display: "table", marginTop: "10px" }}
          >
            <Row xs="auto">
              <Col>
                <Image src={github} />
              </Col>
              <Col>
                <Image src={facebook} />
              </Col>
              <Col>
                <Image src={linkedin} />
              </Col>
            </Row>
          </div>

          <div style={{ margin: "0 auto", display: "table" }}>
            <div class="icon-scroll"></div>
          </div>
          <div className="setHeight"></div>
          <div>
            {" "}
            <span style={{ color: "#ffff" }}>Scroll down</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
