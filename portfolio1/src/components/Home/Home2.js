import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ayush1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              HOW I <span className="purple"> PRESENT </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have gained a lot of experinces in life, leant many things and still learning, with a positive attitude and always carring smile on face… 🤷‍♂️
              <br />
              <br />I have an uppert hands on
              <i>
                <b className="purple">
                  {" "}
                  Javascript, HTML, CSS, React, MongoDB, Redux, Express, Node{" "}
                </b>
              </i>
              <br />
              <br />
              My major intentions and intrests are in &nbsp;
              <i>
                <b className="purple">Web Technologies  </b> and
                also in areas related to{" "}
                <b className="purple">
                  Creating new things and maintaing the excisting one's also and upgarde them according to the needs.
                </b>
              </i>
              <br />
              <br />
              {/* Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>I WOULD LOVE TO DICUSS MY IDEAS WITH YOU</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ayush536"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/ayush-dhondiyal-8b42631b6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
