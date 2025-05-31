"use client";

import Link from "next/link";
import { NavLinkProps } from "../../types";
import { cn } from "@/utils";
import { usePathname } from "next/navigation";
import ContactLink from "./contactLink";

const NavLinks: React.FC<NavLinkProps> = ({ data, isMobileOpen, setIsMobileOpen }) => {
  const pathname = usePathname();
  console.log(pathname);
  const textClass =
    "md:text-[15px] text-[19px] text-foreground group text-accent text-[18px] hover:text-button-blue";
  
  const handleCloseMobileNav = () => {
    if (isMobileOpen) {
      setIsMobileOpen!(false)
    }
  }
  return (
    <ul
      className={cn(
        `basis-[60%] no-underline bg-mobile-nav transition-all duration-1000`,
        {
          "hidden h-0 md:flex gap-11 justify-center items-center ":
            !isMobileOpen,
          "flex flex-col h-auto gap-10 w-full justify-start center items-center":
            isMobileOpen,
        }
      )}
    >
      {data.map((links) => {
        const isActive = links.to === pathname;
        return (
          <li key={links.link}>
            <Link onClick={handleCloseMobileNav} className={textClass} href={links.to}>
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
