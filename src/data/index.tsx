import { cva } from "class-variance-authority";
import { Navlinks, Skills } from "@/types/index";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { IconType } from "react-icons";

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
        dark: "bg-[#01040b] text-foreground space-x-6 ",
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
        primary:
          "bg-button-blue font-bold rounded-xl text-button-text hover:bg-button-blue-hover",
        contact:
          "bg-button-blue rounded-[999px] font-bold text-button-text hover:bg-button-blue-hover",
        secondary:
          "bg-button-gray rounded-xl font-normal text-foreground hover:bg-button-gray-hover",
      },
      size: {
        xsm: "px-4 py-2 md:text-[16px] text-[14px]",
        sm: " py-2 rounded-full px-4 text-sm",
        md: "px-3 py-3 text-base",
        lg: "px-8 py-4.5 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

export const heroText = [
  "I'm a A front-end developer passionate about building user-friendly and impactful products.', 'a Problem Solver who puts in so much intuition to creating visually appealing nd functional websites that aids business growth, attracts clients, stakeholders and set you apart in the market place!', 'Helping startups build fast, scalable, and delightful web apps using modern JavaScript and design-first thinking.",
];

export const skills: Skills[] = [
  { name: "React", icon: FaReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-gray-300" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
];

export const aboutMeText = [
  " Hello! I'm Jason Dagana, a passionate Front-end Developer based in Abuja, Nigeria. My journey into the world of web development began with a fascination for how digital products come to life and how they can solve real-world problems through intuitive user experiences. I thrive on bringing ideas from concept to reality, focusing on clean code, responsive design, and exceptional user interfaces.",
  "With a strong foundation in React and Next.js, I specialize in crafting dynamic and high-performance web applications. I leverage Tailwind CSS for rapid and consistent UI development, ensuring every pixel is in its place. My expertise extends to TypeScript, which helps me write robust and scalable code, and Node.js for building efficient backend services.",
  "I am always eager to learn new technologies and embrace challenges that push my boundaries. My goal is to contribute to projects that make a real difference, combining my technical skills with a keen eye for design to deliver products that users love. When I'm not coding, you can find me exploring new tech trends, contributing to open-source, or sketching new design concepts.",
  "I believe in continuous growth and the power of collaboration. If you're looking for a dedicated developer who cares deeply about user experience and code quality, let's connect!",
];

export interface LiveProjects {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  technologies: string[];
  links: (
    | {
        text: string;
        url: string;
        icon: IconType;
      }
    | {
        text: string;
        url: string;
        icon?: undefined;
      }
  )[];
}

export const liveProjects: LiveProjects[] = [
  {
    // FIRST PROJECT (UNCHANGED)
    image: {
      src: "/home-office-1867761.jpg",
      alt: "Laptop displaying an e-commerce dashboard with charts and analytics",
    },
    title: "E-commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order...",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    links: [
      {
        text: "Live Demo",
        url: "#",
        icon: FaExternalLinkAlt,
      },
    ],
  },
  {
    // SECOND PROJECT
    image: {
      src: "/office-925806.jpg",
      alt: "Mobile app displaying weather forecast",
    },
    title: "Weather Forecast App",
    description:
      "A sleek and responsive mobile-first weather application providing real-time conditions and 7-day forecasts.",
    technologies: ["Vue.js", "JavaScript", "OpenWeather API", "CSS Modules"],
    links: [
      {
        text: "Live Demo",
        url: "#",
        icon: FaExternalLinkAlt,
      },
    ],
  },
  {
    // THIRD PROJECT
    image: {
      src: "/home-office-1867761.jpg",
      alt: "Code editor screenshot with syntax highlighting",
    },
    title: "Task Management CLI",
    description:
      "A command-line interface tool built for developers to efficiently track daily tasks and project progress.",
    technologies: ["Node.js", "Commander.js", "MongoDB", "CLI"],
    links: [
      {
        text: "Live Demo",
        url: "#",
        icon: FaExternalLinkAlt,
      },
    ],
  },
  {
    // FOURTH PROJECT
    image: {
      src: "/office-925806.jpg",
      alt: "Kanban board for project management",
    },
    title: "Simple CRM System",
    description:
      "A basic customer relationship management system to organize contacts, manage leads, and track interactions.",
    technologies: ["Python", "Django", "SQLite", "Bootstrap"],
    links: [
      {
        text: "Live Demo",
        url: "#",
        icon: FaExternalLinkAlt,
      },
    ],
  },
];

export type Stage =
  | "HTML_ONLY"
  | "HTML_CSS_FOUNDATIONS"
  | "JAVASCRIPT_FUNDAMENTALS"
  | "REACT_BASICS"
  | "NEXTJS_ADVANCED";

export interface JourneyProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  stage: Stage;
  image: { src: string; alt: string };
  links: { text: string; url: string; icon: IconType }[];
}

export const developmentJourneyProjects: JourneyProject[] = [
  // --- HTML_ONLY Stage ---
  // {
  //   id: "html-portfolio-v1",
  //   title: "Basic HTML Portfolio",
  //   description:
  //     "My very first web page! This project focused on understanding semantic HTML tags and basic document structure. I learned about headings, paragraphs, lists, links, and images.",
  //   technologies: ["HTML5"],
  //   stage: "HTML_ONLY",
  //   image: {
  //     src: "/office-925806.jpg",
  //     alt: "Screenshot of a basic HTML portfolio page",
  //   },
  //   links: [
  //     {
  //       text: "GitHub Repo",
  //       url: "https://github.com/yourusername/html-portfolio-v1",
  //       icon: FaGithub,
  //     },
  //   ],
  // },
  // {
  //   id: "html-recipe-page",
  //   title: "Simple Recipe Page",
  //   description:
  //     "A foundational project to practice structuring content with HTML, including tables for ingredients and ordered/unordered lists for instructions.",
  //   technologies: ["HTML5"],
  //   stage: "HTML_ONLY",
  //   image: {
  //     src: "/office-925806.jpg",
  //     alt: "Screenshot of a simple HTML recipe page",
  //   },
  //   links: [
  //     {
  //       text: "GitHub Repo",
  //       url: "https://github.com/yourusername/html-recipe-page",
  //       icon: FaGithub,
  //     },
  //   ],
  // },

  // --- HTML_CSS_FOUNDATIONS Stage ---
  {
    id: "html-css-landing-page",
    title: "Responsive Landing Page",
    description:
      "This project was my introduction to CSS, focusing on styling, layout (Flexbox), and making designs responsive for different screen sizes. I learned about selectors, properties, and media queries.",
    technologies: ["HTML5", "CSS3", "Flexbox", "Responsive Design"],
    stage: "HTML_CSS_FOUNDATIONS",
    image: {
      src: "/office-925806.jpg",
      alt: "Screenshot of a responsive landing page",
    },
    links: [
      {
        text: "GitHub Repo",
        url: "https://github.com/yourusername/responsive-landing-page",
        icon: FaGithub,
      },
      {
        text: "Live Demo",
        url: "https://yourusername.github.io/responsive-landing-page/",
        icon: FaExternalLinkAlt,
      },
    ],
  },
  {
    id: "html-css-blog-layout",
    title: "Blog Layout Design",
    description:
      "Practiced advanced CSS techniques like Grid for complex layouts, custom fonts, and basic animations to create an appealing blog post structure.",
    technologies: ["HTML5", "CSS3", "CSS Grid"],
    stage: "HTML_CSS_FOUNDATIONS",
    image: {
      src: "/office-925806.jpg",
      alt: "Screenshot of a blog layout",
    },
    links: [
      {
        text: "GitHub Repo",
        url: "https://github.com/yourusername/blog-layout-design",
        icon: FaGithub,
      },
    ],
  },

  // --- JAVASCRIPT_FUNDAMENTALS Stage ---
  {
    id: "js-calculator",
    title: "Interactive Calculator",
    description:
      "My first dive into JavaScript! I built a fully functional calculator, learning about DOM manipulation, event listeners, basic arithmetic operations, and handling user input.",
    technologies: ["HTML5", "CSS3", "JavaScript (Vanilla)"],
    stage: "JAVASCRIPT_FUNDAMENTALS",
    image: {
      src: "/office-925806.jpg",
      alt: "Screenshot of an interactive calculator",
    },
    links: [
      {
        text: "GitHub Repo",
        url: "https://github.com/yourusername/js-calculator",
        icon: FaGithub,
      },
      {
        text: "Live Demo",
        url: "https://yourusername.github.io/js-calculator/",
        icon: FaExternalLinkAlt,
      },
    ],
  },
  {
    id: "js-todo-list",
    title: "Dynamic To-Do List",
    description:
      "Implemented a to-do list with JavaScript, focusing on adding, deleting, and marking tasks as complete. This taught me about array methods, local storage, and dynamic UI updates.",
    technologies: ["HTML5", "CSS3", "JavaScript (Vanilla)", "Local Storage"],
    stage: "JAVASCRIPT_FUNDAMENTALS",
    image: {
      src: "/office-925806.jpg",
      alt: "Screenshot of a dynamic to-do list",
    },
    links: [
      {
        text: "GitHub Repo",
        url: "https://github.com/yourusername/js-todo-list",
        icon: FaGithub,
      },
    ],
  },

  // --- REACT_BASICS Stage ---
  {
    id: "react-expense-tracker",
    title: "React Expense Tracker",
    description:
      "My first project using React! I built an expense tracker to understand component-based architecture, state management with `useState`, and passing props between components.",
    technologies: ["React", "JavaScript", "CSS Modules"],
    stage: "REACT_BASICS",
    image: {
      src: "/office-925806.jpg",
      alt: "Screenshot of a React expense tracker",
    },
    links: [
      {
        text: "GitHub Repo",
        url: "https://github.com/yourusername/react-expense-tracker",
        icon: FaGithub,
      },
    ],
  },
  {
    id: "react-quiz-app",
    title: "React Quiz Application",
    description:
      "Developed a multi-question quiz app, focusing on conditional rendering, handling complex state logic, and basic routing within a single-page application.",
    technologies: ["React", "JavaScript", "React Router (basic)"],
    stage: "REACT_BASICS",
    image: {
      src: "/office-925806.jpg",
      alt: "Screenshot of a React quiz application",
    },
    links: [
      {
        text: "GitHub Repo",
        url: "https://github.com/yourusername/react-quiz-app",
        icon: FaGithub,
      },
    ],
  },

  // --- NEXTJS_ADVANCED Stage ---
  {
    id: "nextjs-blog-cms",
    title: "Next.js Markdown Blog",
    description:
      "Transitioned to Next.js to leverage server-side rendering (SSR) and static site generation (SSG). This project is a blog that fetches markdown files and renders them dynamically.",
    technologies: ["Next.js", "React", "TypeScript", "Markdown"],
    stage: "NEXTJS_ADVANCED",
    image: {
      src: "/office-925806.jpg",
      alt: "Screenshot of a Next.js Markdown blog",
    },
    links: [
      {
        text: "GitHub Repo",
        url: "https://github.com/yourusername/nextjs-markdown-blog",
        icon: FaGithub,
      },
      {
        text: "Live Demo",
        url: "https://yourusername.vercel.app/nextjs-markdown-blog/",
        icon: FaExternalLinkAlt,
      },
    ],
  },
  {
    id: "nextjs-ecommerce-storefront",
    title: "E-commerce Storefront (Next.js)",
    description:
      "Built a full-stack e-commerce storefront with Next.js, integrating API routes for product data, user authentication, and a shopping cart. Focused on performance and SEO.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "API Routes",
      "Stripe (mock)",
      "MongoDB (mock)",
    ],
    stage: "NEXTJS_ADVANCED",
    image: {
      src: "/office-925806.jpg",
      alt: "Screenshot of a Next.js e-commerce storefront",
    },
    links: [
      {
        text: "GitHub Repo",
        url: "https://github.com/yourusername/nextjs-ecommerce-storefront",
        icon: FaGithub,
      },
    ],
  },
];

export const stages = Array.from(
  new Set(developmentJourneyProjects.map((project) => project.stage))
);

export const stageHeading = (stage: Stage) => {
  switch (stage) {
    case "HTML_ONLY":
      return [
        "HTML Only",
        "This is where it all began! These projects focused on mastering semantic HTML without any CSS or JavaScript without any JavaScript.",
      ];
    case "HTML_CSS_FOUNDATIONS":
      return [
        "HTML & CSS Foundations",
        "These projects focused on mastering semantic HTML, basic CSS layouts, and responsive design principles without any JavaScript.",
      ];
    case "JAVASCRIPT_FUNDAMENTALS":
      return [
        "Adding JavaScript Interactivity",
        " Here I explored DOM manipulation, event handling, and fundamental algorithms to bring dynamic features to my web pages.",
      ];
    case "REACT_BASICS":
      return [
        "Diving into React.js",
        "This phase marked my transition to component-based architecture, state management, and building single-page applications with React.",
      ];
    case "NEXTJS_ADVANCED":
      return [
        "Mastering Next.js & Full Stack",
        "My journey culminated in using Next.js for server-side rendering, API routes, and building full-stack applications with integrated backend services.",
      ];
  }
}