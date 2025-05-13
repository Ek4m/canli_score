import React from "react";
import Image from "next/image";
import Link from "next/link";

export const MainLogo = () => {
  return (
    <Link href="/">
      <Image
        src="/assets/logo_main.png"
        alt="main_icon"
        height={20}
        width={100}
      />
    </Link>
  );
};
