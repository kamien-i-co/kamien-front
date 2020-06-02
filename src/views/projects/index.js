
import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container, 
  Col,
  Row, 
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import StandardHeader from "components/Headers/StandardHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { projects } from "./index.data";
import ProjectCard from "./ProjectCard"

function ProjectsPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

const renderProjectCard = (p) => (<Col md="6"> <ProjectCard project={p} /> </Col>)

  return (
    <>
      <IndexNavbar />
      <StandardHeader text="Nasze Działania" img="aboutus.jpg"/>
      <div className="section profile-content">
        <Container>
            <Row className="mt-5">
              <Col className="ml-auto mr-auto" md="8">
                {/* <br /> */}
                  <Row>
                  {projects.map(renderProjectCard)}
                  </Row>
              </Col>
            </Row>
          </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProjectsPage;
