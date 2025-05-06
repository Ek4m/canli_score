"use client";
import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MainLogo } from "./mainLogo";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { AuthContext } from "@/modules/auth/contexts";

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <>
      <button className="sm:hidden flex" onClick={() => setSidebarOpen(true)}>
        <GiHamburgerMenu color="white" size={20} />
      </button>
      {sidebarOpen && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-2 bg-[#181818] p-[1.5rem]">
          <div className="flex items-center w-full justify-between border-b-1 border-white pb-6">
            <MainLogo />
            <button onClick={() => setSidebarOpen(false)}>
              <MdClose color="white" size={30} />
            </button>
          </div>
          <ul className="!mt-6">
            <li className="!my-3">
              <Link className="text-[white]" href="/scores">
                Scores
              </Link>
            </li>
            <li className="!my-3">
              <Link className="text-[white]" href="/news">
                News
              </Link>
            </li>
            <li className="!my-3">
              <Link className="text-[white]" href="/favourites">
                Favourites
              </Link>
            </li>
            <li className="!my-3">
              <Link className="text-[white]" href="/faq">
                FAQ
              </Link>
            </li>
            <li className="!my-3">
              <Link className="text-[white]" href="/contact">
                Contact
              </Link>
            </li>
            <li className="!my-3">
              <Link className="text-[white]" href="/advertise">
                Advertise
              </Link>
            </li>
            <li className="!my-3">
              <Link className="text-[white]" href="/privacy-policy">
                Privacy Notice
              </Link>
            </li>
            {user ? (
              <>
                <li className="!my-3">
                  <Link className="text-[white]" href="/profile">
                    Profile
                  </Link>
                </li>
                <li className="!my-3">
                  <Link className="text-[red]" href="/logout">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li className="!my-3">
                <Link className="text-[white]" href="/auth/login">
                  Log in
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};
