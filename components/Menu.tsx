import React from "react";
import { MENU_OPTIONS } from "@/constants";
import Link from "next/link";

interface MenuProps {
  activeMenuItem: string | null;
  setActiveMenuItem: (item: string | null) => void;
}

export const Menu: React.FC<MenuProps> = ({ activeMenuItem, setActiveMenuItem }) => {
  const handleMenuItemClick = (item: string) => {
    setActiveMenuItem(item);
  };

  return (
    <ul className="menu-container flex items-center gap-5 title">
      {MENU_OPTIONS.map((item) => (
        <li key={item.id}>
          <Link href={item.url} legacyBehavior>
            <a
              aria-label={item.name}
              title={item.name}
              className={`text-2xl ${
                activeMenuItem === item.id ? "text-teal-500 font-semibold" : ""
              }`}
              onClick={() => handleMenuItemClick(item.id)}
            >
              {item.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
