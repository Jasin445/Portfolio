import React from "react";
import Image from "next/image";
import aboutBackground from "@/assets/shooting-star-2024127.svg";

const BackgroundImg = () => {
  return (
    <>
      <Image
        src={aboutBackground}
        alt={"image of about background"}
        className="object-cover"
        priority
        fill
      />
      <div className="absolute inset-0 bg-black opacity-60" />
    </>
  );
};

export default BackgroundImg;
