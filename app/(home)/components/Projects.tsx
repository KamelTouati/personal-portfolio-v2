"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiNextdotjs,
  SiGithub,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { DirectionAwareHover } from "@/components/ui/DirectionAwareHover";
import { FC } from "react";
import Image from "next/image";

interface DummyContentProps {
  category: string;
  title: string;
  tech: React.ElementType[];
  link: string;
  src: string;
  description: string;
}

const DummyContent: FC<DummyContentProps> = ({
  category,
  title,
  tech,
  link,
  src,
  description,
}) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-800 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mb-4">
        {category}
      </p>
      <p className="text-neutral-800 dark:text-neutral-400 text-base text-xl md:text-3xl font-sans max-w-3xl mb-4">
        <span className="font-bold">{title}</span>
      </p>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mb-4">
        {description}
      </p>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mb-4">
        <span className="font-bold">Tech Used: </span>
        <div className="flex flex-wrap flex-row gap-4 mt-2">
          {tech.map((TechIcon, index) => (
            <div
              key={index}
              className="py-2 px-4 rounded-[10px] bg-gray-200 flex justify-center items-center"
            >
              <TechIcon className="inline-block mr-2" />
            </div>
          ))}
        </div>
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-blue-500 dark:text-blue-400 mt-4 bg-blue-200 w-fit py-2 px-4 rounded-[10px]"
      >
        View on GitHub
      </a>
      <Image
        src={src}
        alt={title}
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8"
      />
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      category: "Web Development",
      title: "Product-management-website",
      tech: [SiHtml5, SiCss3, SiJavascript],
      link: "https://github.com/KamelTouati/Product-management-website",
      src: "/Product-management-website.png",
      description:
        "A comprehensive product management website for managing product listings, inventories, and orders.",
      content: (
        <DummyContent
          category="Web Development"
          title="Product-management-website"
          tech={[SiHtml5, SiCss3, SiJavascript]}
          link="https://github.com/KamelTouati/Product-management-website"
          src="/Product-management-website.png"
          description="A comprehensive product management website for managing product listings, inventories, and orders."
        />
      ),
    },
    {
      category: "Web Development",
      title: "Library-management-system-project",
      tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiJquery, SiDjango],
      link: "https://github.com/KamelTouati/Library-management-system-project",
      src: "/Library-management-system-project.png",
      description:
        "A robust system for managing library books, members, and transactions with user-friendly interfaces.",
      content: (
        <DummyContent
          category="Web Development"
          title="Library-management-system-project"
          tech={[
            SiHtml5,
            SiCss3,
            SiJavascript,
            SiBootstrap,
            SiJquery,
            SiDjango,
          ]}
          link="https://github.com/KamelTouati/Library-management-system-project"
          src="/Library-management-system-project.png"
          description="A robust system for managing library books, members, and transactions with user-friendly interfaces."
        />
      ),
    },
    {
      category: "Web Development",
      title: "Notes-app",
      tech: [SiHtml5, SiCss3, SiReact, SiBootstrap, SiDjango],
      link: "https://github.com/KamelTouati/Notes-app",
      src: "/Notes-app.png",
      description:
        "An application for creating, managing, and organizing notes with a user-friendly interface.",
      content: (
        <DummyContent
          category="Web Development"
          title="Notes-app"
          tech={[SiHtml5, SiCss3, SiReact, SiBootstrap, SiDjango]}
          link="https://github.com/KamelTouati/Notes-app"
          src="/Notes-app.png"
          description="An application for creating, managing, and organizing notes with a user-friendly interface."
        />
      ),
    },
    {
      category: "Web Development",
      title: "chatbot",
      tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiDjango],
      link: "https://github.com/KamelTouati/chatbot",
      src: "/chatbot.png",
      description:
        "A chatbot built for interacting with users and providing automated responses based on queries.",
      content: (
        <DummyContent
          category="Web Development"
          title="chatbot"
          tech={[SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiDjango]}
          link="https://github.com/KamelTouati/chatbot"
          src="/chatbot.png"
          description="A chatbot built for interacting with users and providing automated responses based on queries."
        />
      ),
    },
    {
      category: "Web Development",
      title: "Ecommerce-website-project",
      tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiJquery, SiDjango],
      link: "https://github.com/KamelTouati/Ecommerce-website-project",
      src: "/Ecommerce-website-project.png",
      description:
        "A full-featured e-commerce website for managing products, orders, and customer information.",
      content: (
        <DummyContent
          category="Web Development"
          title="Ecommerce-website-project"
          tech={[
            SiHtml5,
            SiCss3,
            SiJavascript,
            SiBootstrap,
            SiJquery,
            SiDjango,
          ]}
          link="https://github.com/KamelTouati/Ecommerce-website-project"
          src="/Ecommerce-website-project.png"
          description="A full-featured e-commerce website for managing products, orders, and customer information."
        />
      ),
    },
    {
      category: "Web Development - Ai",
      title: "Ai-project-1CS-",
      tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiFlask],
      link: "https://github.com/KamelTouati/Ai-project-1CS-",
      src: "/Ai-project-1CS-.png",
      description:
        "An AI project developed as part of a first-year computer science course, integrating Flask and Bootstrap.",
      content: (
        <DummyContent
          category="Web Development - Ai"
          title="Ai-project-1CS-"
          tech={[SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiFlask]}
          link="https://github.com/KamelTouati/Ai-project-1CS-"
          src="/Ai-project-1CS-.png"
          description="An AI project developed as part of a first-year computer science course, integrating Flask and Bootstrap."
        />
      ),
    },
    {
      category: "Ai & Data Science",
      title: "Data-Analysis-with-Python-Projects",
      tech: [SiPython, SiPandas, SiNumpy],
      link: "https://github.com/KamelTouati/Data-Analysis-with-Python-Projects",
      src: "/Data-Analysis-with-Python-Projects.png",
      description:
        "A collection of data analysis projects using Python, Pandas, and other data science libraries.",
      content: (
        <DummyContent
          category="Ai & Data Science"
          title="Data-Analysis-with-Python-Projects"
          tech={[SiPython, SiPandas, SiNumpy]}
          link="https://github.com/KamelTouati/Data-Analysis-with-Python-Projects"
          src="/Data-Analysis-with-Python-Projects.png"
          description="A collection of data analysis projects using Python, Pandas, and other data science libraries."
        />
      ),
    },
    {
      category: "Web Development",
      title: "TechnoBlog",
      tech: [
        SiHtml5,
        SiTailwindcss,
        SiReact,
        SiRedux,
        SiNodedotjs,
        SiExpress,
        SiMongodb,
        SiPostman,
      ],
      link: "https://github.com/KamelTouati/TechnoBlog",
      src: "/TechnoBlog.png",
      description:
        "A modern blog platform built with React, Redux, and Node.js, featuring a clean UI and robust backend.",
      content: (
        <DummyContent
          category="Web Development"
          title="TechnoBlog"
          tech={[
            SiHtml5,
            SiTailwindcss,
            SiReact,
            SiRedux,
            SiNodedotjs,
            SiExpress,
            SiMongodb,
            SiPostman,
          ]}
          link="https://github.com/KamelTouati/TechnoBlog"
          src="/TechnoBlog.png"
          description="A modern blog platform built with React, Redux, and Node.js, featuring a clean UI and robust backend."
        />
      ),
    },
    {
      category: "Web Development",
      title: "Laptech-Final-Version",
      tech: [
        SiHtml5,
        SiTailwindcss,
        SiReact,
        SiRedux,
        SiNodedotjs,
        SiExpress,
        SiMongodb,
        SiPostman,
      ],
      link: "https://github.com/KamelTouati/Laptech-Final-Version",
      src: "/Laptech-Final-Version.png",
      description:
        "The final version of a tech blog and e-commerce site, built with modern web technologies like React and Node.js.",
      content: (
        <DummyContent
          category="Web Development"
          title="Laptech-Final-Version"
          tech={[
            SiHtml5,
            SiTailwindcss,
            SiReact,
            SiRedux,
            SiNodedotjs,
            SiExpress,
            SiMongodb,
            SiPostman,
          ]}
          link="https://github.com/KamelTouati/Laptech-Final-Version"
          src="/Laptech-Final-Version.png"
          description="The final version of a tech blog and e-commerce site, built with modern web technologies like React and Node.js."
        />
      ),
    },
    {
      category: "Web Development",
      title: "personal-portfolio-v1",
      tech: [SiHtml5, SiTailwindcss, SiNextdotjs],
      link: "https://github.com/KamelTouati/personal-portfolio",
      src: "/personal-portfolio.png",
      description:
        "A personal portfolio showcasing my work and skills, built using Next.js and Tailwind CSS.",
      content: (
        <DummyContent
          category="Web Development"
          title="personal-portfolio-v1"
          tech={[SiHtml5, SiTailwindcss, SiNextdotjs]}
          link="https://github.com/KamelTouati/personal-portfolio"
          src="/personal-portfolio.png"
          description="A personal portfolio showcasing my work and skills, built using Next.js and Tailwind CSS."
        />
      ),
    },
  ];

  const cards = projects.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <div className="flex flex-col items-center justify-center">
        <button className="text-2xl inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Projects
        </button>
      </div>
      <div className="w-[80%] mx-auto my-10">
        <Carousel items={cards} />
      </div>
    </div>
  );
};

export default Projects;
