import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Fade from "react-reveal/Fade";

const Skills = () => {
  const [frontEnd, setFrontEnd] = useState(false);
  const [backEnd, setBacEnd] = useState(false);
  const [devops, setDevops] = useState(false);


  const toggleFrontend = () => {
    setFrontEnd(!frontEnd);
  };

  const toggleBackend = () => {
    setBacEnd(!backEnd);
  };

  const toggleDevops=()=>{
    setDevops(!devops)
  }

  return (
    <Container
      fluid
      style={{
        height: "auto",
        background: "#1f2833",
       
      }}
      id="Skills"
    >
      <div style={{ height: "20px" }}></div>
      <Row>
        <h3 style={{ color: "#FFFF" }}>Skills</h3>
      </Row>
      <div style={{ height: "20px" }}></div>

      <Row>
        <div style={{ margin: "0 auto", display: "table", float: "left" }}>
          <Button
            style={{
              height: "20px",
              width: "20px",
              paddingRight: "1px",
              paddingTop: "0px",
              paddingLeft: "1px",
              paddingBottom: "23px",
            }}
            onClick={toggleFrontend}
          >
            <span>
            <strong>{!frontEnd?"+":"-"}</strong>              <br></br>
            </span>
          </Button>
          <span
            style={{ color: "#66FCF1", fontSize: "18px", marginLeft: "20px" }}
          >
            <strong>
              {"Front End"}
              {""}
            </strong>
          </span>
        </div>
      </Row>

      <Row>
        <div style={{ margin: "0 auto", display: "table", float: "left" }}>
          <Fade left>
            {frontEnd && (
              <table
                className="table table-borderless"
                style={{ color: "#ffff" }}
              >
                <tbody>
                  <tr>
                    <td>React</td>
                  </tr>

                  <tr>
                    <td>Redux</td>
                  </tr>
                  <tr>
                    <td>Redux-thunk</td>
                  </tr>
                  <tr>
                    <td>Javascript</td>
                  </tr>

                  <tr>
                    <td>JQuery</td>
                  </tr>
                </tbody>
              </table>
            )}
          </Fade>
        </div>
      </Row>
      <div style={{ height: "20px" }}></div>
      <Row>
        <div style={{ margin: "0 auto", display: "table" }}>
          <Button
            style={{
              height: "20px",
              width: "20px",
              paddingRight: "1px",
              paddingTop: "0px",
              paddingLeft: "1px",
              paddingBottom: "23px",
            }}
            onClick={toggleBackend}
          >
            <span>
              <strong>{!backEnd?"+":"-"}</strong>
            </span>
          </Button>{" "}
          <span
            style={{ color: "#66FCF1", fontSize: "18px", marginLeft: "20px" }}
          >
            <strong>
              {" Back End"}
              {""}
            </strong>
          </span>
        </div>
      </Row>

      <Row>
        <div style={{ margin: "0 auto", display: "table", float: "left" }}>
          <Fade left>
            {backEnd && (
              <table
                className="table table-borderless"
                style={{ color: "#ffff" }}
              >
                <tbody>
                  <tr>
                    <td>Node.js</td>
                  </tr>

                  <tr>
                    <td>Express js</td>
                  </tr>
                  <tr>
                    <td>Mongo Db</td>
                  </tr>
                  <tr>
                    <td>MySql</td>
                  </tr>

                  <tr>
                    <td>graphQL</td>
                  </tr>

                  <tr>
                    <td>Laravel</td>
                  </tr>
                  <tr>
                    <td>PHP</td>
                  </tr>
                </tbody>
              </table>
            )}
          </Fade>
          
        </div>
      </Row>

      <div style={{ height: "20px" }}></div>
      <Row>
        <div style={{ margin: "0 auto", display: "table" }}>
          <Button
            style={{
              height: "20px",
              width: "20px",
              paddingRight: "1px",
              paddingTop: "0px",
              paddingLeft: "1px",
              paddingBottom: "23px",
            }}
            onClick={toggleDevops}
          >
            <span>
              <strong>{!devops?"+":"-"}</strong>
            </span>
          </Button>{" "}
          <span
            style={{ color: "#66FCF1", fontSize: "18px", marginLeft: "20px" }}
          >
            <strong>
              {"  Dev-Ops"}
            
            </strong>
          </span>
        </div>
      </Row>

      <Row>
        <div style={{ margin: "0 auto", display: "table", float: "left" }}>
          <Fade left>
            {devops && (
              <table
                className="table table-borderless"
                style={{ color: "#ffff" }}
              >
                <tbody>
                  <tr>
                    <td>CI/CD</td>
                  </tr>

                  <tr>
                    <td>AWS</td>
                  </tr>
                  <tr>
                    <td>Heroku</td>
                  </tr>
                </tbody>
              </table>
            )}
          </Fade>
          
        </div>
      </Row>

      <Row></Row>
    </Container>
  );
};

export default Skills;
