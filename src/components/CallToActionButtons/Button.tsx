import { buttonVariants } from "@/data";
import { ButtonProps } from "@/types";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import Link from "next/link";
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonProps> = ({
  href,
  variant,
  size,
  className,
  children,
  ...props
}) => {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size }), className)}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={(props as ButtonHTMLAttributes<HTMLButtonElement>).type ?? "button"}
      className={cn(buttonVariants({ variant, size }), className)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
