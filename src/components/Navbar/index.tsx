"use client";

import { useEffect, useState } from "react";
import Navlinks from "./Navlinks";
import { navbarLinks, navbarVariants } from "@/data";
import { NavbarProps } from "@/types";
import { cn } from "@/utils";
import MobileToggle from "./MobileToggle";
import MobileNavlinks from "./MobileNavlinks";
import Logo from "../Logo";
import ContactLink from "./contactLink";

const Navbar: React.FC<NavbarProps> = ({ className, variant }) => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isOpaque, setIsOpaque] = useState<boolean>(false);

  useEffect(() => {
    const changeNavBackground = () => {
      if (window.scrollY > 20) {
        setIsOpaque(true);
      } else {
        setIsOpaque(false)
      }
    };
    window.addEventListener("scroll", changeNavBackground);

    return () => window.removeEventListener("scroll", changeNavBackground);
  }, []);

  console.log(isOpaque ? "opaque" : 'transparent')

  return (
    <section
      className={cn(
        navbarVariants({ variant: isOpaque ? 'dark' : variant }),
        {
          "bg-mobile-nav": isMobileOpen,
        },
        `${className}`
      )}
    >
      <div className="flex max-w-[1360px] mx-auto justify-between items-center w-full">
        <Logo isMobileOpen={isMobileOpen} />

        <Navlinks data={navbarLinks} />
        <ContactLink />
        <MobileToggle
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        />
        <MobileNavlinks
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        />
      </div>
    </section>
  );
};

export default Navbar;
