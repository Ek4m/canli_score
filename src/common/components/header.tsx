import { Button } from "antd";
import Image from "next/image";
import React from "react";
import { HeaderLink } from "./headerLink";

export const AppHeader = () => {
  return (
    <header
      className={`flex justify-between px-8 py-5 bg-[#181818] border-b-1 border-[#414141]`}
    >
      <div className="flex items-center">
        <Image
          src="https://www.livescore.com/ls-web-assets/images/live-score-outlined-74d06.webp"
          alt="main_icon"
          height={20}
          width={100}
        />
        <ul className="flex !ml-6">
          <HeaderLink href="/scores" title="Scores" />
          <HeaderLink href="/news" title="News" />
          <HeaderLink href="/favourites" title="Favourites" />
        </ul>
      </div>
      <div>
        <Button className={`!bg-[#1b1b1b] !text-white`}>Log In</Button>
      </div>
    </header>
  );
};
