import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://drive.google.com/file/d/17GON5eGRe8kGHbJ-61sH7gTOUrcR_IYy/view?usp=sharing";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}

        {/* <Row className="resume">
          <Document file={resumeLink}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row> */}

        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* <Button variant="primary" href="https://drive.google.com/file/d/17GON5eGRe8kGHbJ-61sH7gTOUrcR_IYy/view?usp=sharing" target="_blank">
            {/* <AiOutlineDownload /> */}
            {/* &nbsp;VIEW CV j
          // </Button> */} 
          <h1 style={{textDecoration:"underline", fontWeight:"bolder"}}>MY SKILLS COMPRICES OF :</h1>
        </Row>
   
      </Container>
      <ol>
        <ul><h1 style={{color: "gray"}}>Javascript</h1></ul>
        <li><h1 style={{color: "gray"}}>HTML</h1></li>
        <li><h1 style={{color: "gray"}}>CSS</h1></li>
        <li><h1 style={{color: "gray"}}>React</h1></li>
        <li><h1 style={{color: "gray"}}>MongoDb</h1></li>
        <li><h1 style={{color: "gray"}}>Redux</h1></li>
        <li><h1 style={{color: "gray"}}>Express</h1></li>
        <li><h1 style={{color: "gray"}}>Node</h1></li>
      </ol>
    </div>
  );
}

export default ResumeNew;
