"use client";
import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import { BallTriangle } from "react-loader-spinner";

const MyComponent: React.FC = () => {
  return (
    <div>
      <Loading message="Please wait..." />
    </div>
  );
};

export default MyComponent;
