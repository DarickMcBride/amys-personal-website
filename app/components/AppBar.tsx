"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import DropDownMenu from "./DropDownMenu";

export default function AppBar() {
  const path = usePathname();

  return (
    <header className="navbar bg-base-200 fixed top-0 w-full z-50">
      <div className="navbar-start">
        <DropDownMenu />
        <Link
          href="/"
          className="hover:opacity-80 transition-opacity duration-200"
        >
          <Image
            src={"/icon.svg"}
            alt="Website logo"
            className="h-auto"
            width={50}
            height={0}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className=" menu-horizontal px-1 gap-x-4">
          <li className="">
            <Link
              href="/"
              className={`active:text-primary border-b-4 border-transparent ${
                path === "/" &&
                "!text-primary !border-primary cursor-pointer pb-2"
              }`}
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={`active:text-primary border-b-4 border-transparent ${
                path === "/contact" &&
                "!text-primary !border-primary cursor-pointer pb-2"
              }`}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </header>
  );
}
