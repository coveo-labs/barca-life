// queries/GetALLBlogPosts.graphql
import { gql } from 'graphql-request';

const GET_ALL_BLOG_POST = gql`
query MyQuery($locale:String!)  {
  BlogPostPage(where: { _metadata: { locale: { eq: $locale } } }) {
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

export default GET_ALL_BLOG_POST;