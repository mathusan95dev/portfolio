import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import hamburger from "../assets/images/humburger.png";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import ScrollTo from "react-scroll-into-view";

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
        zIndex: "1000",
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
                  <ScrollTo selector={`#Aboutme`}>
                    <div className="headerMenu">About Me</div>
                    <div
                    className="menuhighlight"
                    style={{ height: "4px", width: "100%" }}
                  ></div>
                  </ScrollTo>
                 
                </Col>
                <Col>
                  <ScrollTo selector={`#Projects`}>
                    <div className="headerMenu">Projects</div>
                    <div
                    className="menuhighlight"
                    style={{ height: "4px", width: "100%" }}
                  ></div>
                  </ScrollTo>
                  
                </Col>
                <Col>
                  <ScrollTo selector={`#Skills`}>
                    <div className="headerMenu">Skills</div>
                    <div
                    className="menuhighlight"
                    style={{ height: "4px", width: "100%" }}
                  ></div>
                  </ScrollTo>
                  
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
            <tr style={{ height: "60px" }}>
              <ScrollTo selector={`#Aboutme`}>
                <td>About me</td>
              </ScrollTo>
            </tr>
            <tr style={{ height: "60px" }}>
              <ScrollTo selector={`#Projects`}>
                <td>Projects</td>
              </ScrollTo>
            </tr>
            <tr style={{ height: "60px" }}>
              <ScrollTo selector={`#Skills`}>
                <td>Skills</td>
              </ScrollTo>
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
