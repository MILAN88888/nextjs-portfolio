"use client";
import React, { useState, useEffect } from "react";
import LoadingMessage from "@/components/Loading";

const Loading: React.FC = () => {
  return (
    <div>
      <LoadingMessage message="Please wait..." />
    </div>
  );
};

export default Loading;
