'use client'
import React, {useState} from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { MediaConnect } from "./MediaConnect";
import { Menu } from "./Menu";
import Link from "next/link";

export const Header = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMilanLinkClick = () => {
    setActiveMenuItem(null);
  };
  return (
    <div className="z-10 max-w-6xl w-full items-center justify-between md:flex lg:flex md:justify-between lg:justify-between">
      <p className="left-0 top-0 flex w-full justify-center pb-6 pt-8 md:mb-10 lg:static lg:w-auto  lg:rounded-xl lg:mb-10">
        <Link href="./">
          <span
            className="font-bold text-4xl title"
            onClick={handleMilanLinkClick}
          >
            @Milan
          </span>
        </Link>
      </p>
      <div className="bottom-0 left-0 mb-6 flex  w-full items-end justify-center dark:from-black dark:via-black  md:auto md:flex md:items-end lg:static lg:h-auto lg:w-auto">
        <Menu activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
      </div>
      <div className="bottom-0 left-0 flex  w-full items-end justify-center dark:from-black dark:via-black  md:mb-4 md:flex md:items-end lg:mb-4 lg:static lg:h-auto lg:w-auto">
        <div className="flex items-center gap-5">
          <MediaConnect />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
