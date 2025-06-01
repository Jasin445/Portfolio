import Image from "next/image";
import Button from "../CallToActionButtons/Button";
import { IconType } from "react-icons";

interface ProjectCardProps {
  image: {src: string, alt: string}
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

interface StackCardProps {
  technologies: string[];
}

const StackCard: React.FC<StackCardProps> = ({ technologies }) => {
  return (
    <section className="flex flex-wrap gap-2">
      {technologies.map((data) => {
        return (
          <span
            key={data}
            className="rounded-full bg-slate-800 text-slate-300 py-1 px-2 text-[14px]"
          >
            {data}
          </span>
        );
      })}
    </section>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  technologies,
  links,
}) => {
    

    
  return (
    <div
      className="flex flex-col gap-3 w-full bg-slate-900 rounded-md z-20 "
    >
      <div className="relative w-full h-[200px] rounded-md">
              { <Image
                  src={image.src}
                  alt={image.alt || "Image preview"}
                  fill
                  sizes={'md'}
                  priority
                  className="object-fit rounded-t-md h-auto"
              />}
      </div>

      <div className="px-6 pb-9 flex flex-col md:gap-6 gap-3">
        <div>
          <h1 className="font-bold md:text-[26px] text-[23px] mb-2">{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          <StackCard technologies={technologies} />
        </div>

        <div className="flex  flex-wrap gap-5">
          {links && links.length > 0 && links.map((link) => {
            const Icon = link.icon;
            return (
              <Button
                key={link.text}
                className={"flex md:mt-0 mt-2 items-center gap-2"}
                variant={"primary"}
                size={"xsm"}
                    href={link.url}
                    target="blank"
              >
                {link.text}
                {Icon && <Icon />}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
