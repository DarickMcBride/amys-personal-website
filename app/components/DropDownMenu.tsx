"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DropDownMenu() {
  const path = usePathname();
  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  };

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
      >
        <li>
          <Link
            href="/"
            onClick={handleClick}
            className={`${path === "/" && "text-primary"}`}
          >
            HOME
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            onClick={handleClick}
            className={`${path === "/contact" && "text-primary"}`}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}
