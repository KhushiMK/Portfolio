import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Developer with a strong interest in Data Science,
              Machine Learning, and Full-Stack Web Development, passionate about
              building intelligent and scalable solutions.
              <br />
              <br />
              Over time, I’ve gained experience in data analysis, predictive
              modeling, and developing web applications. I enjoy working with
              <i>
                <b className="purple">
                  {" "}
                  Python, SQL, Java, and JavaScript{" "}
                </b>
              </i>
              along with tools like
              <i>
                <b className="purple">
                  {" "}
                  Pandas, Scikit-learn, Node.js, and React.js{" "}
                </b>
              </i>
              .
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Machine Learning, NLP, and Full-Stack Application Development{" "}
                </b>
              </i>
              , where I can combine data-driven insights with intuitive user
              experiences.
              <br />
              <br />
              I’ve worked on projects involving
              <i>
                <b className="purple">
                  {" "}
                  ranking systems, emotion detection using speech and text,{" "}
                </b>
              </i>
              and real-world data analysis.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
