import { VariantProps } from "class-variance-authority";
import { buttonVariants, navbarVariants } from "@/data";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { IconType } from "react-icons";

export type Page = "Home" | "About" | "Contact" | "Project" | "Resume";
export type Theme = "light" | "dark";
export type Variants = "primary | secondary | accent | success | error| warning | info";

export interface HeroProps {
  page: Page;
  title: string;
}

export interface Navlinks {
  link: string;
  to: string;
}

export interface NavLinkProps {
  data: Navlinks[];
  isMobileOpen?: boolean;
  setIsMobileOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavbarProps extends VariantProps<typeof navbarVariants> {
  className?: string;
}

export interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme: () => void;
}

export interface MobileProps {
  isMobileOpen?: boolean;
  setIsMobileOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

// === Variant Props Interface ===
interface ButtonVariantProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children?: ReactNode;
  href?: string;
}

// === Anchor Version Interface ===
interface AnchorButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonVariantProps {
  href: string; // required for link
}

// === Native Button Version Interface ===
interface NativeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  href?: undefined; // ensures it does not conflict with AnchorButtonProps
}

// === Combined Interface ===
export type ButtonProps = AnchorButtonProps | NativeButtonProps;

export interface Skills {
  name: string;
  icon: IconType;
  color: string;
  }
