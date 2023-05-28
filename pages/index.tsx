import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";

function index() {
  const [arrayIndex, setArrayIndex] = useState(0);
  const thoughts = [1, 2, 3, 4, 5];

  useEffect(() => {
    const thoughtsInterval = setInterval(() => {
      setArrayIndex((prev) => (prev + 1) % thoughts.length);
    }, 2000);

    return () => clearInterval(thoughtsInterval);
  }, []);

  return (
    <div className="min-w-screen min-h-screen bg-pink-100 relative">
      <Layout>
        <Head>
          <title>{`Bella's Adventures`}</title>
        </Head>
        <Container>
          <Image
            src="/assets/glitter_background.svg"
            fill={true}
            alt="glitter background"
            className="object-cover object-center z-0 absolute"
            priority
          />
          <div className="top-0 bottom-0 left-0 right-0 bg-white/50 absolute z-10"></div>
          <div className="top-0 left-0 bottom-0 right-0 justify-center absolute z-40 mx-auto">
            <div className="w-full h-full max-w-7xl flex flex-col sm:flex-row justify-center items-center mx-auto py-16 sm:py-12">
              <div className="w-full h-full relative">
                <Image
                  src="/assets/thought_bubble_beach.svg"
                  fill={true}
                  alt="bella's thoughts"
                  className={`object-center object-contain absolute z-0 ${
                    arrayIndex === 4 && "z-50"
                  }`}
                />
                <Image
                  src="/assets/thought_bubble_heart.svg"
                  fill={true}
                  alt="bella's thoughts"
                  className={`object-center object-contain absolute z-0 ${
                    arrayIndex === 3 && "z-50"
                  }`}
                />
                <Image
                  src="/assets/thought_bubble_icecream.svg"
                  fill={true}
                  alt="bella's thoughts"
                  className={`object-center object-contain absolute z-0 ${
                    arrayIndex === 2 && "z-50"
                  }`}
                />
                <Image
                  src="/assets/thought_bubble_crown.svg"
                  fill={true}
                  alt="bella's thoughts"
                  className={`object-center object-contain absolute z-0 ${
                    arrayIndex === 1 && "z-50"
                  }`}
                />
                <Image
                  src="/assets/thought_bubble_meat.svg"
                  fill={true}
                  alt="bella's thoughts"
                  className={`object-center object-contain absolute z-0${
                    arrayIndex === 0 && "z-50"
                  }`}
                  priority
                />
              </div>
              <div className="w-full h-full relative">
                <Image
                  src="/assets/bella_button.svg"
                  fill
                  alt="bella description"
                  className="object-center object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
}

export default index;
