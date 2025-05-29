import Hero from "@/components/hero";


export const metadata = {
  title: "About",
  description: "Learn more about Jason Dagana, a full-stack developer with a passion for user-centric design and scalable software.",
  keywords: ["About Me", "Developer Bio", "Full-stack Developer", "Your Name"],
};

export default function AboutPage() {
  return (
      <Hero page={"about-me"}  />

  );
}