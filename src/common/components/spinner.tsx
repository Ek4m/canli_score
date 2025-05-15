import React from "react";
import "./global.css";

export const AppSpinner = () => {
  return (
    <div className="w-full min-h-[50vh] flex items-center justify-center">
      <span className="loader"></span>
    </div>
  );
};
