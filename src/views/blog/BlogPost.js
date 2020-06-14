import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Image = (props) => (
  <img {...props} style={{maxWidth: '100%'}} />
)

function BlogPost({post}) {
  return (
    <>
      <h1 className="post-title mb-5">
        <Link className="post-title--link" href="#" >{post.title}</Link>
      </h1>
       <ReactMarkdown source={post.content} renderers={{image: Image}} />
    </>);
}


export default BlogPost;