"use client";
import { AuthContext } from "@/modules/auth/contexts";
import { Spinner } from "@radix-ui/themes";
import { redirect } from "next/navigation";
import React, { FC, PropsWithChildren, useContext } from "react";

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  if (loading) return <Spinner />;
  if (user) return children;
  return redirect("/");
};

export default AdminLayout;
