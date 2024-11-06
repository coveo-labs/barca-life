// queries/GetBlogPost.graphql
import { gql } from 'graphql-request';

const GET_BLOG_POST = gql`
query MyQuery($url:String!) {
  BlogPostPage(where: { _metadata: { url: { default: { eq: $url } } } }) {
    items {
      _metadata {
        displayName
        key
        locale
        url {
          base
          default
        }
        types
        status
        published
        lastModified
        created
      }
      Heading
      SeoSettings {
        MetaTitle
        MetaDescription
        GraphType
      }
      ArticleAuthor
      ArticleSubHeading
      BlogPostBody {
        html
      }
    }
  }
}
`;

export default GET_BLOG_POST;