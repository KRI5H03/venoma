import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Sidenav from "./Sidenav";

const Header = () => {
  return (
    <header className="xl:absolute max-w-[1440px] mx-auto left-0 right-0 bg-grey-50">
      <div className="container mx-auto">
        <div className="flex justify-center items-center py-10 ">
          {/* Logo and sidenav */}
          <div className="mx-auto flex items-center justify-center w-full md:w-auto gap-8">
            <Link href={"/"}>
              <Image src="/assets/logo.svg" width={226} height={48} alt="" />
            </Link>
            <div className="xl:hidden">
              <Sidenav />
            </div>
          </div>
          {/* nav(desktop) */}
          <nav className="hidden xl:flex mx-auto gap-6 pl-24 text-primary ">
            <a href="#" className="link-primary hover:text-accent2">
              Men
            </a>
            <a href="#" className="link-primary hover:text-accent2">
              Women
            </a>
            <a href="#" className="link-primary hover:text-accent2">
              Kids
            </a>
            <a href="#" className="link-primary hover:text-accent2">
              Sale
            </a>
          </nav>
          {/* search,favourite,cart */}
          <div className="mx-auto hidden md:flex items-center justify-center gap-4 w-[360px]">
            {/* search */}
            <input
              className="input w-[126px] focus:w-[200px] transition-all pl-7"
              type="search"
              placeholder="Search ..."
            />
            {/* favourite btn*/}
            <button className="btn-icon btn-outline group">
              <FaHeart className="text-primary group-hover:text-primary/90" />
            </button>
            {/* car btn */}
            <button className="btn-icon btn-accent">
              <FaCartShopping className="text-primary" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
