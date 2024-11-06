import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of your site.</p>
      <Link href="/en/blog">Go to blog</Link>
    </main>
  );
}
