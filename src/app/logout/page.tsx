"use client";
import React, { useContext, useEffect } from "react";
import { Spinner } from "@radix-ui/themes";

import { AuthContext } from "@/modules/auth/contexts";
import { useRouter } from "next/navigation";

const LogoutPage = () => {
  const { logout } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    document.title = "Logging out...";
  }, []);

  useEffect(() => {
    localStorage.removeItem("access_token");
    logout();
    router.push("/scores");
  }, [logout, router]);
  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      <Spinner size={"3"} />
    </div>
  );
};

export default LogoutPage;
