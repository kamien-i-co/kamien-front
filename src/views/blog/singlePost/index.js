import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

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
import ARTICLE_QUERY from '../../../queries/article';
import Query from '../../../components/Query';

const Image = (props) => (
  <img {...props} style={{ maxWidth: '100%' }} />
);

function SinglePost() {
  const { id } = useParams();
  return (
    <>
      <IndexNavbar />
      <Query query={ARTICLE_QUERY} id={id}>
        {({ data: { article } }) => (
          <>
            <StandardHeader text={article.title} img="aboutus.jpg" />
            <div className="section profile-content">
              <Container>
                <Row className="mt-5">
                  <ReactMarkdown source={article.content} renderers={{ image: Image }} />
                </Row>
              </Container>
            </div>
          </>
        )}
      </Query>
      <DemoFooter />
    </>
  );
}

export default SinglePost;
