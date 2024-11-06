import { GraphQLClient } from 'graphql-request';
import GetBlogPost from '../../../queries/GetBlogPost';

async function fetchBlogPost(slug:string, locale:string) {
  const client = new GraphQLClient(`${process.env.GRAPHQL_ENDPOINT}?auth=${process.env.ACCESS_TOKEN}`);
  const data: any = await client.request(GetBlogPost,{"url":`/${locale}/blog/${slug}/`});
  return data.BlogPostPage.items[0];
}

export default async function BlogPostPage(data:any ) {
  const { locale, slug } = await data.params;
  const blogPost:any = await fetchBlogPost(slug, locale);
  
  if (!blogPost) {
    return <p>Blog post not found</p>;
  }

  return (
    <main>
      <h1>{blogPost.SeoSettings.MetaTitle}</h1>
      <p>{blogPost.ArticleAuthor}</p>
      <p>{blogPost.ArticleSubHeading}</p>
      <article dangerouslySetInnerHTML={{ __html: blogPost.BlogPostBody.html }}></article>
    </main>
  );
}