"use client";
import React from "react";
import Title from "./Title";
import { CardHoverEffect } from "@/components/ui/CardHoverEffect";
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
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const Skills = () => {
  const skills = [
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },
    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "Typescript",
      Icon: SiTypescript,
    },
    {
      text: "Jquery",
      Icon: SiJquery,
    },
    {
      text: "Sass",
      Icon: SiSass,
    },
    {
      text: "Bootstrap",
      Icon: SiBootstrap,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Redux",
      Icon: SiRedux,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "Express.js",
      Icon: SiExpress,
    },
    {
      text: "Postman",
      Icon: SiPostman,
    },
    {
      text: "Django",
      Icon: SiDjango,
    },
    {
      text: "Flask",
      Icon: SiFlask,
    },
    {
      text: "Fastapi",
      Icon: SiFastapi,
    },
    {
      text: "Nextjs",
      Icon: SiNextdotjs,
    },
    {
      text: "Github",
      Icon: SiGithub,
    },
    {
      text: "Mongodb",
      Icon: SiMongodb,
    },
    {
      text: "Mysql",
      Icon: SiMysql,
    },
    {
      text: "Postgresql",
      Icon: SiPostgresql,
    },
    {
      text: "Figma",
      Icon: SiFigma,
    },
    {
      text: "A.photoshop",
      Icon: SiAdobephotoshop,
    },
    {
      text: "A.illustrator",
      Icon: SiAdobeillustrator,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      {/* <Title
        text="Skills 🛠️"
        className="flex flex-col items-center justify-center"
      /> */}
      <div className="flex flex-col items-center justify-center">
        <button className="text-2xl inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Skills 🛠️
        </button>
      </div>
      <CardHoverEffect items={skills} />
    </div>
  );
};

export default Skills;
