import React from "react";
import { HeaderLink } from "./headerLink";
import { MainLogo } from "./mainLogo";

export const AppFooter = () => {
  return (
    <footer
      className={`flex justify-between px-8 py-5 bg-[#181818] border-t-1 border-[#414141]`}
    >
      <MainLogo />
      <ul className="flex !ml-6">
        <HeaderLink href="/faq" title="FAQ" />
        <HeaderLink href="/contact" title="Contact" />
        <HeaderLink href="/privacy-policy" title="Privacy Notice" />
        <HeaderLink href="/advertise" title="Advertise" />
      </ul>
    </footer>
  );
};
