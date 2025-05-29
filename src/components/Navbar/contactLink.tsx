"use client";

import { MobileProps } from "@/types";
import Button from "../CallToActionButtons/Button";

const ContactLink: React.FC<MobileProps> = ({ isMobileOpen }) => {
  
  if (isMobileOpen) {
     return <Button variant={'contact'}  href="/contact" size={'xsm'}
      className=" md:text-2xl"
    >
      Contact Me
    </Button>
  }
 
// md:basis-[15%] basis-[100px]
  return (
    <Button href="/contact" size={'sm'}
      className="hidden md:inline-block md:text-[17px] text-[14px]"
    >
      Contact Me
    </Button>
  );
};

export default ContactLink;
