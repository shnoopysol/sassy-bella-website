import React from "react";
import Image from "next/image";
import Link from "next/link";

function SocialsBar() {
  return (
    <div className="fixed bottom-0 right-0 z-50">
      <div className="flex gap-2 p-2 h-16 w-24 sm:h-20 sm:w-28">
        <div className="flex-1 relative">
          <Link href="https://www.tiktok.com/@mysassybella">
            <Image
              src="/assets/tiktok_logo.svg"
              fill
              className="object-contain object-center"
              alt="tiktok logo"
            />
          </Link>
        </div>
        <div className="flex-1 relative">
          <Link href="https://www.instagram.com/imsassybella">
            <Image
              src="/assets/ig_logo.svg"
              fill
              className="object-contain object-center"
              alt="ig logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SocialsBar;
