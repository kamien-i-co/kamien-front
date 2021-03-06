import React from 'react';

// reactstrap components
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import StandardHeader from 'components/Headers/StandardHeader.js';
import DemoFooter from 'components/Footers/DemoFooter.js';
import { assHistory } from './index.data';

function AboutUs() {
  document.documentElement.classList.remove('nav-open');
  React.useEffect(() => {
    document.body.classList.add('landing-page');
    return function cleanup() {
      document.body.classList.remove('landing-page');
    };
  });
  return (
    <>
      <IndexNavbar />
      <StandardHeader text="O Nas" img="aboutus.jpg" />
      <div className="section profile-content">
        <Container>
          <Row className="mt-5">
            <Col className="ml-auto mr-auto" md="8">
              {assHistory.map((text) => <p className="mb-4">{text}</p>)}
              <br />
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default AboutUs;
