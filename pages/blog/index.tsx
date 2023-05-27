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
          <title>{`Bella's Adventures Blog`}</title>
        </Head>
        <Container>
          <div>
            <Image
              src="/assets/diary_element.svg"
              alt="diary book sticker"
              height={200}
              width={200}
              className={`absolute bottom-3 sm:top-3 right-3`}
            />
          </div>
          <div>
            <Image
              src="/assets/diary_stars.svg"
              alt="diary dog sticker"
              height={250}
              width={250}
              className="absolute top-3 left-3"
            />
          </div>
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
