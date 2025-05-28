import { cn } from "@/utils";

interface LogoProps {
  className?: string;
  isMobileOpen: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, isMobileOpen }) => {
  console.log("logo: ", isMobileOpen)
  return (
    <h1 className={cn( 'md:text-2xl text-xl text-nowrap transition-all duration-1000', 
      {
      "text-button-blue font-extrabold": isMobileOpen
    }
  )
    }>Jason's Portfolio</h1>
  )
}
export default Logo