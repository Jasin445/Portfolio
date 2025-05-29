import { cva } from "class-variance-authority";
import { Navlinks, Skills } from "@/types/index";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

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

export const heroText = ["I'm a A front-end developer passionate about building user-friendly and impactful products.', 'a Problem Solver who puts in so much intuition to creating visually appealing nd functional websites that aids business growth, attracts clients, stakeholders and set you apart in the market place!', 'Helping startups build fast, scalable, and delightful web apps using modern JavaScript and design-first thinking."] 

export const skills: Skills[] = [
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-300" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
];
  
export const aboutMeText = [" Hello! I'm Jason Dagana, a passionate Front-end Developer based in Yenagoa, Nigeria. My journey into the world of web development began with a fascination for how digital products come to life and how they can solve real-world problems through intuitive user experiences. I thrive on bringing ideas from concept to reality, focusing on clean code, responsive design, and exceptional user interfaces.", "With a strong foundation in React and Next.js, I specialize in crafting dynamic and high-performance web applications. I leverage Tailwind CSS for rapid and consistent UI development, ensuring every pixel is in its place. My expertise extends to TypeScript, which helps me write robust and scalable code, and Node.js for building efficient backend services.", "I am always eager to learn new technologies and embrace challenges that push my boundaries. My goal is to contribute to projects that make a real difference, combining my technical skills with a keen eye for design to deliver products that users love. When I'm not coding, you can find me exploring new tech trends, contributing to open-source, or sketching new design concepts.", "I believe in continuous growth and the power of collaboration. If you're looking for a dedicated developer who cares deeply about user experience and code quality, let's connect!"]


