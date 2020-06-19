import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      title
      tags {
        id
        name
      }
      mainImg {
        url
      }
    }
  }
`;

export default ARTICLES_QUERY;
