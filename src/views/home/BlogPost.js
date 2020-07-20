import React from 'react';

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';

// TODO: fix text color
function BlogPost({ post }) {
  return (
    <Card className="card-profile card-plain">
      <img
        alt="..."
        src={require(`assets/img/${post.mainImg}`)}
      />
      <CardBody>
        <div className="author">
          <CardTitle tag="h4"><a href="#">{post.title}</a></CardTitle>
        </div>
        <p className="card-description text-center">
          {post.shortDescription}
        </p>
      </CardBody>
    </Card>
  );
}

export default BlogPost;
