import { ContactForm } from "@/modules/contact/components";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact us",
};

const ContactPage = () => {
  return <ContactForm />;
};

export default ContactPage;
