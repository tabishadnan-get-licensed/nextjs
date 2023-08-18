"use client";

import React from "react";

const ClientSideIndicator = ({ label }) => {
  return (
    <p className="absolute -top-[10px] right-[20px] h-[30px] bg-[#FDFDFD]">
      {label}
    </p>
  );
};

export default ClientSideIndicator;
