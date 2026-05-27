import React from "react";
import { MENU_OPTIONS } from "@/constants";
import Link from "next/link";

interface MenuProps {
  activeMenuItem: string | null;
  setActiveMenuItem: (item: string | null) => void;
}

export const Menu: React.FC<MenuProps> = ({ activeMenuItem, setActiveMenuItem }) => {
  return (
    <nav>
      <ul className="flex items-center gap-1">
        {MENU_OPTIONS.map(item => (
          <li key={item.id}>
            <Link href={item.url} legacyBehavior>
              <a
                aria-label={item.name}
                className={`nav-pill${activeMenuItem === item.id ? " active" : ""}`}
                onClick={() => setActiveMenuItem(item.id)}
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
