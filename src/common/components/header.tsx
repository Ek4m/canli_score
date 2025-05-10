import React from "react";

import { HeaderLink } from "./headerLink";
import { MainLogo } from "./mainLogo";
import { ProfileIndicator } from "./profileIndicator";
import { Sidebar } from "./sidebar";

export const AppHeader = () => {
  return (
    <header
      className={`flex justify-between items-center px-8 py-5 bg-[#181818] border-b-1 border-[#414141]`}
    >
      <div className="flex items-center">
        <MainLogo />
        <ul className="!ml-6 sm:flex hidden">
          <HeaderLink href="/scores" title="Scores" />
          <HeaderLink href="/news" title="News" />
          <HeaderLink href="/favourites" title="Favourites" />
          <HeaderLink href="/admin/blogs" title="Admin" />
        </ul>
      </div>
      <div className="sm:flex hidden">
        <ProfileIndicator />
      </div>
      <Sidebar />
    </header>
  );
};
