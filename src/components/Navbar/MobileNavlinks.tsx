
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
        ` md:hidden fixed h-[calc(100vh-65px)] top-[65px] w-full left-0 bg-background z-30 transform transition-all duration-1000 ease-in-out flex flex-col items-center justify-center`,
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
