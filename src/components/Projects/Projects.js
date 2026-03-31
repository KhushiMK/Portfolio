import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              isBlog={false}
              title="MindTracker"
              description="MindTracker is a multi-modal machine learning application that analyzes both speech and textual data to detect stress levels and emotional states. It leverages audio feature extraction and NLP techniques to understand user behavior, enabling real-time monitoring and multi-session tracking. The system is designed to provide meaningful insights into mental well-being through data-driven analysis."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DRACO-LTR"
              description="DRACO-LTR is a machine learning–based learning-to-rank system built using real-world Q&A data. It focuses on improving ranking quality by modeling user interactions such as clicks, positions, and engagement patterns. The system incorporates feature engineering and debiasing techniques to handle exposure bias and is evaluated using metrics like NDCG and MAP to ensure accurate and effective ranking."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Banking Customer Insights Analysis"
              description="Banking Customer Insights Analysis is a data-driven project focused on analyzing customer data from a banking dataset using Python and SQL. It involves performing exploratory data analysis (EDA) to identify patterns in income, loan distribution, and customer demographics. The project also includes building visual dashboards to present insights that can support better decision-making and business strategies."
              ghLink="https://github.com/KhushiMK/Banking_Customer_Insights_analysis"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
