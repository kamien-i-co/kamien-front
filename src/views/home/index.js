/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
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
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import {description, activities, posts } from './index.data';
import BlogPost from './BlogPost';
import Activity from './Activity'

function Home() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const renderActivities = activities.map((a) => <Col md="3"><Activity activity={a}/></Col>)
  const renderBlogPosts = posts.map((p) => <Col md="4"><BlogPost post={p}/></Col>)
  return (
    <>
      <IndexNavbar landing />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">O stowarzyszeniu</h2>
                <h5 className="description">
                  {description}
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Więcej
                </Button>
              </Col>
            </Row>
            
            <br />
            <br />
            <Container>
              <h2 className="title">Nasze Działania</h2>
              <Row>
                {renderActivities}
              </Row>
            </Container>
            <Container>
              <h2 className="title">Najnowsze wpisy na blogu</h2>
              <Row>
                {renderBlogPosts}
              </Row>
              <Button
                  className="btn-round"
                  color="info"
                  href="/blog"
                  onClick={e => e.preventDefault()}
                >
                Więcej wpisów
              </Button>
            </Container>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default Home;
