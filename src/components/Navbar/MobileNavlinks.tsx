
import { MobileProps } from "@/types";
import Navlinks from "./Navlinks";
import { navbarLinks } from "@/data";
import { cn } from "@/utils";

const MobileNavlinks: React.FC<MobileProps> = ({
  isMobileOpen,
  setIsMobileOpen,
}) => {
  console.log(isMobileOpen === false ? "mobile closed" : "mobile opened");
  return (
    <section
      className={cn(
        `px-4 md:hidden fixed h-[calc(100vh-65px)] top-[65px] py-14  w-full left-0 bg-background z-30 transform transition-all duration-1000 ease-in-out flex flex-col justify-center items-center`,
        {
          "translate-y-0 pointer-events-auto bg-mobile-nav": isMobileOpen,
          "-translate-y-[100vh] pointer-events-none": !isMobileOpen,
        }
      )}
    >
      <Navlinks
        data={navbarLinks}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
    </section>
  );
};

export default MobileNavlinks;
