import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.jsx";
import Particle from "../Particle";
import Apollo from "../../Assets/Projects/yes.png";
import Nike from "../../Assets/Projects/mynike.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nike}
              isBlog={false}
              title="Nike Clone"
              description="A web application to buy shoes and clothes of one of the best
              brands Embedded JavaScript, MongoDB, HTML and CSS."
              link="https://github.com/salakhas/Nike"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Apollo}
              isBlog={false}
              title="YES STYLES"
              description="A web application buy branded clothes even from across the
              oceans. build with JavaScript, HTML ,CSS with many backend features too."
              link="https://github.com/RoshanIndane/Unit4_YesstyleClone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
