import Link from "next/link";
import React from "react";
const Nav = ({ toggle, menus }) => {
  return (
    <nav
      className={`absolute bg h-[90vh] w-screen ${
        toggle ? "right-0 " : "-right-[120%]"
      } top-[110px] grid justify-center items-center transition-all duration-700`}
    >
      <ul className="flex flex-col justify-center items-center lg:items-start space-y-8  text-4xl h-full w-full pl-10">
        {menus.map((link, index) => (
          <Link key={index} href={link.to}>
            <li
              className={`relative cursor-pointer text-center mr-10  uppercase text-[1.5em] text-transparent tracking-[.1em]  pr-2`}
            >
              <span
                className="text_stroke"
                href={link?.to}
                data-text={link?.title}
              >
                {link.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
