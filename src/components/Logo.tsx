import Image from "next/image";
import logo from "@/assets/logo-removebg-preview.png";

interface LogoProps {
  className?: string;
  isMobileOpen: boolean;
}

const Logo: React.FC<LogoProps> = ({ isMobileOpen }) => {
  console.log("logo: ", isMobileOpen);
  return (
    <div className="relative -ml-8 w-[120px] md:h-[90px] h-[70px] ">
      <Image
        src={logo}
        alt={"image of logo"}
        fill
        sizes="md"
        priority
        className="object-fill"
      />
      <div className="bg-black absolute inset-0 opacity-0" />
    </div>
  );
};
export default Logo;
