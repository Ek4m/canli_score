import React from "react";
import { Metadata } from "next";

import { ProfileForm } from "@/modules/profile/components";

export const metadata: Metadata = {
  title: "Update your profile",
};
const ProfilePage = () => {
  return <ProfileForm />;
};

export default ProfilePage;
