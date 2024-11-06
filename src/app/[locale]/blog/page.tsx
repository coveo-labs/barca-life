// app/blog/page.tsx

import { GraphQLClient } from 'graphql-request';
import GetAllBlogPosts from '../../queries/GetAllBlogPosts';

async function fetchAllBlogPost(locale:string) {
  console.log(`${process.env.GRAPHQL_ENDPOINT}?auth=${process.env.ACCESS_TOKEN}`);
  const client = new GraphQLClient(`${process.env.GRAPHQL_ENDPOINT}?auth=${process.env.ACCESS_TOKEN}`);
  const data: any = await client.request(GetAllBlogPosts,{"locale":locale});
  return data.BlogPostPage.items
}

export default async function AllBlogPostsPage(data:any ) {
  const { locale } = await data.params;
  const blogPosts:any = await fetchAllBlogPost(locale);
  
  if (!blogPosts) {
    return <p>No blog post</p>;
  }

  return (
    <main>
        <h1>Blog List</h1>
        <ul>
        {blogPosts.map((post: any, index: number) => (
            <li key={`list-${index}`}><a key={`link-${index}`} href={`${post._metadata.url.base}${post._metadata.url.default}`}>{post.Heading}</a></li>
        ))}
        </ul>
    </main>
  );
}