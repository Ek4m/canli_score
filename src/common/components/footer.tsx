import React from "react";
import { HeaderLink } from "./headerLink";
import { MainLogo } from "./mainLogo";

export const AppFooter = () => {
  return (
    <footer
      className={`flex justify-between px-8 py-5 bg-[#181818] border-t-1 border-[#414141] md:flex-row flex-col items-center`}
    >
      <MainLogo />
      <ul className="flex !ml-6 md:flex-row flex-col !mt-3 md:!mt-0">
        <HeaderLink href="/faq" title="FAQ" />
        <HeaderLink href="/contact" title="Contact" />
        <HeaderLink href="/privacy-policy" title="Privacy Notice" />
      </ul>
    </footer>
  );
};
