import React from "react";
import Image from "next/image";
import Layout from "../../components/layout";
import Head from "next/head";
import Container from "../../components/container";

function Index() {
  return (
    <div className="min-w-screen min-h-screen bg-yellow-200">
      <Layout>
        <Head>
          <title>{`Email Sassy Bella`}</title>
        </Head>
        <Container>
          <div className="max-w-lg text-center mx-auto flex flex-col justify-center p-5 relative">
            <Image
              src="/assets/thought_bubble.svg"
              alt="bella's thoughts"
              width={500}
              height={500}
              className="mx-auto object-center object-contain"
            />
            <h2 className="text-sm">
              You can email my pawrents at <span className="underline">imsassybella@gmail.com</span>
            </h2>
          </div>
        </Container>
      </Layout>
    </div>
  );
}

export default Index;
