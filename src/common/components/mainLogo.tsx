import React from "react";
import Image from "next/image";
import Link from "next/link";

export const MainLogo = () => {
  return (
    <Link href="/">
      <Image
        src="https://www.livescore.com/ls-web-assets/images/live-score-outlined-74d06.webp"
        alt="main_icon"
        height={20}
        width={100}
      />
    </Link>
  );
};
