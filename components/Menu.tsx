"use client";
import React, { useState } from "react";
import { MENU_OPTIONS } from "@/constants";
import Link from "next/link";

export const Menu = ({activeMenuItem, setActiveMenuItem}:any) => {

  const handleMenuItemClick = (item: any) => {
    setActiveMenuItem(item.id);
  };
  return (
    <ul className="menu-container flex items-center gap-5 title">
      {MENU_OPTIONS.map((item) => (
        <li key={item.id}>
          <Link
            href={item.url}
            aria-label={item.name}
            title={item.name}
            className={`text-2xl ${
              activeMenuItem == item.id
                ? "text-teal-500 font-semibold"
                : ""
            }`}
            onClick={() => handleMenuItemClick(item)}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
