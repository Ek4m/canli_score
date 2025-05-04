import React from "react";

import { HeaderLink } from "./headerLink";
import { MainLogo } from "./mainLogo";
import { LoginModal } from "./login";

export const AppHeader = () => {
  return (
    <header
      className={`flex justify-between items-center px-8 py-5 bg-[#181818] border-b-1 border-[#414141]`}
    >
      <div className="flex items-center">
        <MainLogo />
        <ul className="flex !ml-6">
          <HeaderLink href="/scores" title="Scores" />
          <HeaderLink href="/news" title="News" />
          <HeaderLink href="/favourites" title="Favourites" />
        </ul>
      </div>
      <div className="flex">
        <LoginModal />
      </div>
    </header>
  );
};
