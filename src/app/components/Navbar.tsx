"use client";

import Link from "next/link";
import Image from "next/image";
import { BsList, BsX } from "react-icons/bs";
import { useState } from "react";

const styles = {
  navLinks:
    "cursor-pointer ml-10 uppercase border-b border-white hover:border-[#F6B519] text-xl",
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <nav className="w-full h-[7rem] shadow-xl bg-black relative">
        <div className="flex items-center justify-between h-full px-4 w-full relative z-10">
          <Link href="/">
            <div className="cursor-pointer">
              <Image
                src="https://t4.ftcdn.net/jpg/05/00/53/13/360_F_500531332_w0GziC9gLWjV2ZN1xvCjYT11uKMeUBi1.jpg"
                alt="job logo"
                width={110}
                height={85}
                className="object-contain"
              />
            </div>
          </Link>
          <div className="text-white flex space-x-20 ml-auto">
            <ul className="hidden sm:flex">
              <li className={styles.navLinks}>
                <Link href="/home">Home</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/jobs">Jobs</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/part-time jobs">Part-time jobs</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/">Contact</Link>
              </li>
              <li className="flex items-center space-x-5 text-[#F6B519] ml-10">
                <h3 className="cursor-pointer border border-[#F6B519] px-4 py-1 rounded-full bg-[#F6B519] text-black hover:bg-black hover:text-[#F6B519] ease-in-out duration-300">
                  Sign In
                </h3>
              </li>
            </ul>
          </div>
          <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? (
              <BsX className="h-8 w-8 text-[#F6B519]" />
            ) : (
              <BsList className="h-8 w-8 text-[#F6B519]" />
            )}
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "absolute top-full left-0 w-full sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500 z-20"
              : "hidden"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={toggleMenu} className="cursor-pointer">
              <BsX className="h-8 w-8 text-[#F6B519]" />
            </div>
          </div>
          <div className="flex-col py-4">
            <ul>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 hover:underline hover:decoration-[#F6B519]"
              >
                <Link href="/home">Home</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 hover:underline hover:decoration-[#F6B519]"
              >
                <Link href="/about">About</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 hover:underline hover:decoration-[#F6B519]"
              >
                <Link href="/contact">Contact</Link>
              </li>
              <li className="flex items-center py-4 text-[#F6B519]">
                <p className="cursor-pointer px-4 py-1 rounded-full bg-[#F6B519] text-black hover:bg-black hover:text-[#F6B519] ease-in-out duration-300">
                  Sign In
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
