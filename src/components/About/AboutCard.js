import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Khushi Kalaria</span>{" "}
            from <span className="purple">Gujarat, India</span>.
            <br />
            I’m currently  looking for working as a{" "}
            <span className="purple">Data Scientist and Data Analyst </span>
            <br />I hold an MCA from{" "}
            <span className="purple">PES University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> I love Swimming 🏊
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Where Complexity meets Clarity!"{" "}
          </p>
          <footer className="blockquote-footer">Khushi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
