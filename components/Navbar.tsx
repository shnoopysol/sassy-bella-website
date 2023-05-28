import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`text-white flex justify-between sticky top-0 w-full py-1 px-3 font-bold z-50 text-2xl  ${
        scrollPosition > 0 ? "bg-pink-100 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="cursor-pointer hover:scale-125 hover:translate-x-5 hover:translate-y-3 transition-transform">
        <Link href="/">
          <Image src="/assets/bella_logo.svg" width="75" height="75" alt="bella logo" />
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <button
          className={`transition-transform hover:scale-125 hover:animate-wiggle !outline-none ${
            pathname === "/" && "scale-125 animate-wiggle"
          }`}
          onClick={() => router.push("/")}
        >
          🏠
        </button>
        <button
          className={`transition-transform hover:scale-125 hover:animate-wiggle !outline-none ${
            pathname.startsWith("/blog") && "scale-125 animate-wiggle"
          }`}
          onClick={() => router.push("/blog")}
        >
          🐶
        </button>
        <button
          className={`transition-transform hover:scale-125 hover:animate-wiggle !outline-none ${
            pathname.startsWith("/contact") && "scale-125 animate-wiggle"
          }`}
          onClick={() => router.push("/contact")}
        >
          ✉️
        </button>
      </div>
    </div>
  );
}

export default Navbar;
