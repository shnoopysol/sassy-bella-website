import Container from "../../components/container";
import Image from "next/image";
import MoreStories from "../../components/more-stories";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const morePosts = allPosts.slice(0);
  return (
    <div className="min-w-screen min-h-screen bg-pink-100 relative pb-10">
      <Layout>
        <Head>
          <title>{`Bella's Blog`}</title>
        </Head>
        <Image
          fill={true}
          alt="diary background"
          className="object-cover object-left absolute z-0"
          src="/assets/diary_bg.svg"
        />
        <div className="top-0 bottom-0 left-0 right-0 bg-white/50 absolute z-10"></div>
        <Container>
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "coverImage", "excerpt"]);

  return {
    props: { allPosts },
  };
};
