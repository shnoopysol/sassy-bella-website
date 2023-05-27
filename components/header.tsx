import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/blog" className="hover:underline">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
          Bella's <span className="italic text-3xl md:text-4xl font-normal">mini</span> Adventures.
        </h1>
      </Link>
    </h2>
  );
};

export default Header;
