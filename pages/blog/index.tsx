import Layout from '@components/layout';
import matter from 'gray-matter';
import {readdirSync, readFileSync} from 'fs';
import type {NextPage} from 'next';
import Link from 'next/Link';

interface Post {
  date: string;
  title: string;
  category: string;
  slug: string;
}

const Blog: NextPage<{ posts: Post[] }> = ({posts}) => {
  return (
    <Layout canGoBack title="blog" seoTitle='blog'>
      <h1 className="font-semibold text-lg text-center mt-5 mb-10">Latest Posts</h1>
      <ul>
        {posts.map((post, i) => (
          <div key={i} className="mb-5">
            <Link href={`/blog/${post.slug}`}>
              <a>
                <span className="text-lg text-red-500">{post.title}</span>
                <div><span>{post.date} / {post.category}</span></div>
              </a>
            </Link>

          </div>
        ))}
      </ul>
    </Layout>
  );
};

export async function getStaticProps() {
  const blogPosts = readdirSync('./posts').map(file => {
    const content = readFileSync(`./posts/${file}`, 'utf-8');
    const [slug, _] = file.split('.');
    return {...matter(content).data, slug};
  });

  return {
    props: {
      posts: blogPosts
    }
  };
}

export default Blog;
