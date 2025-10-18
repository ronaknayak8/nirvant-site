"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const menu = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "T&C", href: "/tnc" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Nirvant Logo"
            width={160}
            height={50}
            priority
            className="object-contain"
          />
        </Link>

        {/* Menu */}
        <nav>
          <ul className="hidden md:flex gap-4 text-gray-700 font-medium">
            {menu.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="relative px-4 py-1 rounded-full hover:bg-sky-400 transition-colors duration-200"
              >
                <Link href={item.href}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
