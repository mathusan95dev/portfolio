import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
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
    <>
     <div style={{ height: "30px", background: "#1f2833" }}></div>
      <Container
        fluid
        style={{
          height: "80px",
          background: "#0b0c10",
        }}
      >
        <div style={{ height: "30px" }}></div>
        <Row>
          <span style={{ color: "#FFFF" }}>Made with ♥ by Mathu</span>
        </Row>
      </Container>
    </>
  );
};

export default NavBar;
