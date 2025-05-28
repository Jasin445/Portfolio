import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { BiChevronDown } from "react-icons/bi";

const Accordion = () => {
  return (
    <AccordionPrimitive.Root className="bg-blue-500 text-black" type="single" collapsible>
      <AccordionPrimitive.Item value="item-1">
        <AccordionPrimitive.Header className="bg-yellow-500">
          <AccordionPrimitive.Trigger asChild>
             <button className="flex group justify-between items-center w-full data-[state=open]:text-red-500 p-4">
              <span>Who is the first man on earth?</span>
              <BiChevronDown size={24} className="transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
 />
            </button>
          </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Content className="bg-green-500">
                  Hello there, the name of the first man on earth was Adam and the name of the first woman was Eve.
              </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  );
};

export default Accordion;
