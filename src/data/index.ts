import { cva } from "class-variance-authority";
import { Navlinks } from "@/types/index";

export const navbarLinks: Navlinks[] = [
  { link: "Home", to: "/" },
  { link: "About Me", to: "/about" },
  { link: "Projects", to: "/projects" },
  { link: "Resume", to: "/resume" },
];

export const navbarVariants = cva(
  "flex items-center z-50 md:h-[100px] fixed w-full h-[70px] justify-between md:px-8 px-3 py-4",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground space-x-4",
        dark: "bg-transparent text-foreground space-x-6 ",
        light:
          "bg-transparent text-gray-800 text-foreground space-x-4 border-b border-gray-200",
        vertical: "flex-col items-start bg-gray-700 text-white space-y-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const buttonVariants = cva(
  "inline-block text-nowrap text-foreground px-6 py-3",
  {
    variants: {
      variant: {
        primary: "bg-button-blue font-bold rounded-xl text-button-text hover:bg-button-blue-hover",
        contact: "bg-button-blue rounded-[999px] font-bold text-button-text hover:bg-button-blue-hover",
        secondary: "bg-button-gray rounded-xl font-normal text-foreground hover:bg-button-gray-hover"
      },
      size: {
        xsm: 'px-4 py-1 text-[19px]',
        sm: ' py-2 rounded-full px-4 text-sm',
        md: 'px-3 py-3 text-base',
        lg: 'px-8 py-4.5 text-lg',
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm"
    }
  }
)


export const themeScript = 
`
  (function() {
    // Check if localStorage is available
    try {
      var mode = localStorage.getItem('theme');
      if (mode === 'dark' || mode === 'light') {
        document.documentElement.classList.add(mode);
        return;
      }
    } catch (e) {
    
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light'); // Ensure light is also set if no preference or explicitly light
    }
  })();
`;

export const heroText = ["i'm a A front-end developer passionate about building user-friendly and impactful products.', 'a Problem Solver who puts in so much intuition to creating visually appealing nd functional websites that aids business growth, attracts clients, stakeholders and set you apart in the market place!', 'Helping startups build fast, scalable, and delightful web apps using modern JavaScript and design-first thinking."] 
