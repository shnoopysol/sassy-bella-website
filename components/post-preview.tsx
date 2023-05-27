import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ['latin'] })

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <div className="w-full border-2 bg-amber-50 border-gray-600 shadow-[4px_4px_0_rgb(244,114,182)]">
      <div className=" w-full h-96 relative border-b-2 border-b-gray-600">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="relative">
        {/* <Image
          src="/assets/diary_bg.svg"
          alt="blog background"
          fill={true}
          className="object-center object-cover absolute z-0"
        /> */}
        <div className="relative p-5 z-10">
          <h3 className="text-3xl mb-3 leading-snug font-semibold font-caveat" style={caveat.style}>
            <Link as={`/posts/${slug}`} href="/posts/[slug]" className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="text-lg mb-4 italic">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
