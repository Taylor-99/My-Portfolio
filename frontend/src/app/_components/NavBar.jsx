
'use client'

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const NavBar = () => {
    const pathname = usePathname();

  return (
    <div className="flex flex-row">
        <ul className="flex flex-row w-full sm:justify-around">
            <li className={`p-2 text-black ${pathname === '/' ? 'font-bold underline' : ''}`}>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li className={`p-2 text-black ${pathname === '/about' ? 'font-bold underline' : ''}`}>
                <Link href="/about">
                    About
                </Link>
            </li>
            <li className={`p-2 text-black ${pathname === '/projects' ? 'font-bold underline' : ''}`}>
                <Link href="/projects">
                    Projects
                </Link>
            </li>
            <li className={`p-2 text-black ${pathname === '/contact' ? 'font-bold underline' : ''}`}>
                <Link href="/contact">
                    Contact
                </Link>
            </li>
            
        </ul>
    </div>
  )
}

export default NavBar