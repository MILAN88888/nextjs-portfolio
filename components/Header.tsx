import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { MediaConnect } from "./MediaConnect";

export const Header = () => {
  return (
    <div className="z-10 max-w-6xl w-full items-center justify-between md:flex lg:flex md:justify-between lg:justify-between">
      <p className="left-0 top-0 flex w-full justify-center pb-6 pt-8  lg:static lg:w-auto  lg:rounded-xl lg:p-4">
        <strong>
          <span className="font-bold text-4xl title">@Milan</span>
        </strong>
        &nbsp;
      </p>
      <div className="bottom-0 left-0 flex  w-full items-end justify-center dark:from-black dark:via-black  md:auto md:flex md:items-end lg:static lg:h-auto lg:w-auto">
        <div className="flex items-center gap-5">
          <MediaConnect />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
