import React from 'react'
import { MENU_OPTIONS } from '@/constants'
import Link from 'next/link'

export const Menu = () => {
  return (
	<ul className="menu-container flex items-center gap-5">
      {MENU_OPTIONS.map((item) => (
        <li key={item.id}>
          <Link
            href={item.url}
            aria-label={item.name}
            title={item.name}
            className="text-2xl"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
