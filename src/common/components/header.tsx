import React from "react";

import { HeaderLink } from "./headerLink";
import { MainLogo } from "./mainLogo";
import { ProfileIndicator } from "./profileIndicator";
import { Sidebar } from "./sidebar";

export const AppHeader = () => {
  return (
    <header
      className={`flex justify-between items-center px-8 bg-[#001e28] border-b-3 border-[#A3C940]`}
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
