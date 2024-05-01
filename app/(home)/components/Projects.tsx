import React from "react";
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
} from "react-icons/si";
import { DirectionAwareHover } from "@/components/ui/DirectionAwareHover";

const Projects = () => {
  const projects = [
    {
      title: "Product-management-website",
      tech: [SiHtml5, SiCss3, SiJavascript],
      link: "https://github.com/KamelTouati/Product-management-website",
      cover: "/Product-management-website.png",
    },
    {
      title: "Library-management-system-project",
      tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiJquery, SiDjango],
      link: "https://github.com/KamelTouati/Library-management-system-project",
      cover: "/Library-management-system-project.png",
    },
    {
      title: "Notes-app",
      tech: [SiHtml5, SiCss3, SiReact, SiBootstrap, SiDjango],
      link: "https://github.com/KamelTouati/Notes-app",
      cover: "/Notes-app.png",
    },
    {
      title: "chatbot",
      tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiDjango],
      link: "https://github.com/KamelTouati/chatbot",
      cover: "/chatbot.png",
    },
    {
      title: "Ecommerce-website-project",
      tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiJquery, SiDjango],
      link: "https://github.com/KamelTouati/Ecommerce-website-project",
      cover: "/Ecommerce-website-project.png",
    },
    {
      title: "Ai-project-1CS-",
      tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiFlask],
      link: "https://github.com/KamelTouati/Ai-project-1CS-",
      cover: "/Ai-project-1CS-.png",
    },
    {
      title: "Data-Analysis-with-Python-Projects",
      tech: [],
      link: "https://github.com/KamelTouati/Data-Analysis-with-Python-Projects",
      cover: "/Data-Analysis-with-Python-Projects.png",
    },
    {
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
      cover: "/TechnoBlog.png",
    },
    {
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
      cover: "/Laptech-Final-Version.png",
    },
    {
      title: "personal-portfolio-v1",
      tech: [SiHtml5, SiTailwindcss, SiNextdotjs],
      link: "https://github.com/KamelTouati/personal-portfolio",
      cover: "/personal-portfolio.png",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      {/* <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center"
      /> */}
      <div className="flex flex-col items-center justify-center">
        <button className="text-2xl inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Projects 🎨
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 pt-20 gap-5">
        {projects.map((project, index) => {
          const { link, title, tech, cover } = project;
          return (
            <Link href={link} key={index}>
              <div className={cn("p-5 rounded-md h-[200px]")}>
                <DirectionAwareHover
                  imageUrl={cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <div className="flex gap-5">
                      {tech.map((Icon, iconIndex) => (
                        <Icon className="w-8 h-8" key={iconIndex} /> // Ensure consistent icon sizes
                      ))}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
