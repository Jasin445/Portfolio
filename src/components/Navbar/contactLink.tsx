"use client";

import { MobileProps } from "@/types";
import Button from "../CallToActionButtons/Button";

const ContactLink: React.FC<MobileProps> = ({ isMobileOpen }) => {
  
  if (isMobileOpen) {
     return <Button variant={'contact'}  href="/contact" size={'xsm'}
    >
      Contact Me
    </Button>
  }
 
// md:basis-[15%] basis-[100px]
  return (
    <Button href="/contact" size={'sm'}
      className="hidden md:inline-block md:text-[16px] text-[14px]"
    >
      Contact Me
    </Button>
  );
};

export default ContactLink;
