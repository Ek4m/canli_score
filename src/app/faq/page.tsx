import { FaqList } from "@/modules/faq/components";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tez-tez verilən suallar",
};

const FaqPage = () => {
  return <FaqList />;
};

export default FaqPage;
