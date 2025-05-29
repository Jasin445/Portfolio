"use client";

import Link from "next/link";
import { NavLinkProps } from "../../types";
import { cn } from "@/utils";
import { usePathname } from "next/navigation";
import ContactLink from "./contactLink";

const NavLinks: React.FC<NavLinkProps> = ({ data, isMobileOpen }) => {
  const pathname = usePathname();
  console.log(pathname);
  const textClass =
    "md:text-[20px] text-[23px] text-foreground group text-accent text-[18px] hover:text-button-blue";
  return (
    <ul
      className={cn(
        `basis-[60%] no-underline bg-mobile-nav transition-all duration-1000`,
        {
          "hidden h-0 md:flex lg:gap-9 gap-5 justify-center items-center ":
            !isMobileOpen,
          "flex flex-col h-screen gap-14 w-full justify-center items-center ":
            isMobileOpen,
        }
      )}
    >
      {data.map((links) => {
        const isActive = links.to === pathname;
        return (
          <li className="" key={links.link}>
            <Link className={textClass} href={links.to}>
              {links.link}
            </Link>
            <div
              className={cn({
                "h-[2px] w-full bg-button-blue": isActive,
              })}
            />
          </li>
        );
      })}
      <li>
        {isMobileOpen && <ContactLink isMobileOpen={isMobileOpen} />}
      </li>
    </ul>
  );
};

export default NavLinks;
