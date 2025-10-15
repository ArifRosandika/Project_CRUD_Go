"use client";
import Link from "next/link";
import { IoHome, IoAdd } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white px-6 py-3 shadow-md">
      <Link href="/" className="text-xl font-bold text-blue-100 hover:text-blue-400">
        Movie App
      </Link>
      <div className="flex gap-4">
        <Link href="/" className="hover:text-blue-400">
        <IoHome size={24} /></Link>
        <Link href="/add" className="hover:text-blue-400"><IoAdd size={24} /></Link>
      </div>
    </nav>
  );
}
