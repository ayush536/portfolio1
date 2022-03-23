import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjor Everyone, My self <span className="purple">Ayush Dhondiyal </span>
            from <span className="purple"> Delhi, India, roots from Uttarakhand. </span>
            <br />I am a 19 year old boy, who have a bug of coding fitted inside him, and one who always use to smile and also make other's smile too.
            <br />
            <br />
            Apart from coding, i love to spend my time on..
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listning others (ideas and experinces)
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking food for others.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and trekking.
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "TRY TRY BUT DO NOT CRY"{" "}
          </p>
          <footer className="blockquote-footer">Ayush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
