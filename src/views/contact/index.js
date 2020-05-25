
import React from "react";

import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import StandardHeader from "components/Headers/StandardHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProjectsPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  return (
    <>
      <IndexNavbar />
      <StandardHeader text="Kontakt" img="aboutus.jpg"/>
      <div className="section profile-content">
        <Container>
            <Row className="mt-5">
              <Col className="ml-auto mr-auto" md="8">
                <h3 className="text-center" >
                  <a className="contact-page-email" href="mailto:stowarzyszeniekamienico@gmail.com">
                    stowarzyszeniekamienico@gmail.com
                  </a>
                </h3>
                <p className="mt-3">KRS: xxxxx</p>
                <p className="mt-3">REGON: xxxxx</p>
              </Col>
            </Row>
          </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProjectsPage;
