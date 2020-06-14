
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import StandardHeader from "components/Headers/StandardHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import BlogPost from "./BlogPost";

import {posts} from './blog.data';

function Blog() {
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
      <StandardHeader text="Blog" img="aboutus.jpg"/>
      <div className="section profile-content">
        <Container>
            <Row className="mt-5">
              <Col className="ml-auto mr-auto" md="8">
                {posts.map(p => <BlogPost key={p.id} post={p} />)}
              </Col>
            </Row>
          </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default Blog;
