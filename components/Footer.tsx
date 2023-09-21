'use client';
import React from "react";
import { MediaConnect } from "./MediaConnect";
import { ExtraMediaConnect } from "./ExtraMediaConnect";

export const Footer = () => {
  return (
    <div className=" z-1 max-w-6xl w-full items-center footer-container">
      <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-teal-700" />
      <div className="z-1 max-w-6xl w-full items-center justify-between md:auto md:flex md:justify-between lg:flex lg:justify-between">
        <p className="left-0 top-0 flex w-full justify-center pb-2 pt-2  lg:static lg:w-auto  lg:rounded-xl lg:p-4">
          Copyright &copy; 2023 by @Milan
        </p>
        <div className="bottom-0 left-0 flex mt-4  w-full items-end justify-center dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none lg:float-right">
          <div className="flex items-center gap-5">
            <MediaConnect />
			<ExtraMediaConnect/>
          </div>
        </div>
      </div>
    </div>
  );
};
