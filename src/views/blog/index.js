
import React from "react";
import { Route } from "react-router-dom";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import Query from "../../components/Query";
import ARTICLES_QUERY from ",,/../queries/articles";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import StandardHeader from "components/Headers/StandardHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import BlogPost from "./BlogPost";

function Blog({match}) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  
  const renderArticles = (
    <Query query={ARTICLES_QUERY}>
      {({ data: { articles } }) => {
        return articles.map(p => <BlogPost key={p.id} post={p} />);
      }}
    </Query>
  )

  return (
    <>
      <IndexNavbar />
      <StandardHeader text="Blog" img="aboutus.jpg"/>
      <div className="section profile-content">
        <Container>
            <Row className="mt-5">
              <Col className="ml-auto mr-auto" md="8">
                {renderArticles}
              </Col>
            </Row>
          </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default Blog;
