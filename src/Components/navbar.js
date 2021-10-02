import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import hamburger from "../assets/images/humburger.png";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const NavBar = () => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  const handleMobile = () => {
    setState({
      isPaneOpen: true,
    });
  };
  return (
    <Container
      fluid
      style={{
        height: "80px",
        background: "#1f2833",
        position: "sticky",
        top: "0",
      }}
    >
      <Row>
        <Col sm={8}>
          <div
            className="d-block d-sm-none"
            style={{ marginTop: "10px", float: "left" }}
          >
            <Image src={hamburger} onClick={handleMobile} />
          </div>
        </Col>
        <Col sm={4}>
          <div className="d-none d-sm-block">
            <div style={{ marginTop: "30px" }}>
              <Row xs="auto">
                <Col>
                  <div className="headerMenu">About Me</div>
                  <div
                    className="menuhighlight"
                    style={{ height: "4px", width: "100%" }}
                  ></div>
                </Col>
                <Col>
                  <div className="headerMenu">Projects</div>
                  <div
                    className="menuhighlight"
                    style={{ height: "4px", width: "100%" }}
                  ></div>
                </Col>
                <Col>
                  <div className="headerMenu">Skills</div>
                  <div
                    className="menuhighlight"
                    style={{ height: "4px", width: "100%" }}
                  ></div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        // title="Hey, it is optional pane title.  I can be React component too."
        // subtitle="Optional subtitle."
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ isPaneOpen: false });
        }}
      >
        
        <table classname="table table-borderless">
          <tbody>
            <tr style={{height:"60px"}}>
              <td>About me</td>
            </tr>
            <tr style={{height:"60px"}}>
              <td>Projects</td>
            </tr>
            <tr style={{height:"60px"}}>
              <td>Skills</td>
            </tr>
          </tbody>
        </table>

        <br />
        {/* <img src="img.png" /> */}
      </SlidingPane>
    </Container>
  );
};

export default NavBar;
