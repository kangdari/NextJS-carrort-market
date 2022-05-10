import type {GetStaticProps, NextPage} from 'next';
import {readdirSync, readFileSync} from 'fs';
import matter from 'gray-matter';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import Layout from '@components/layout';

const Post: NextPage<{ post: string, data: any }> = ({post, data}) => {
  return (
    <Layout canGoBack title={data?.title} seoTitle={data?.title}>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{__html: post}}/>
    </Layout>
  );
};

// 동적인 url을 갖는 페이지에서 getStaticProps을 사용할 때 필요
// 몇개의 페이지가 만들어 지는지, slug가 무엇인지 next.js 에게 미리 알려줌
//
export function getStaticPaths() {
  const files = readdirSync('./posts').map(file => {
    const [name, _] = file.split('.');
    return {params: {slug: name}};
  });

  return {
    paths: files,
    fallback: false
  };
}


// 페이지에서 html로 바꿔주기 전 데이터를 넣을 수 있음
export const getStaticProps: GetStaticProps = async (ctx) => {
  const {content, data} = matter.read(`./posts/${ctx.params?.slug}.md`);

  // md => html 변환
  const {value} = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

  return {
    props: {
      data,
      post: value
    },
  };
};

export default Post;
