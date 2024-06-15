import { MovingBorderBtn } from "@/components/ui/MovingBorder";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import Image from "next/image";

const Navbar = ({ className }: { className?: string }) => {
  const socials = [
    {
      Link: "https://www.linkedin.com/in/kamel-touati-bb436b230/",
      Label: "LinkedIn",
      Icon: SiLinkedin,
    },

    {
      Link: "https://github.com/KamelTouati",
      Label: "Github",
      Icon: SiGithub,
    },

    {
      Link: "https://www.instagram.com/_kamel_touati/",
      Label: "Instagram",
      Icon: SiInstagram,
    },
  ];

  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <div className="flex gap-2">
        <Image alt="image" src="/logo.svg" height={20} width={20} />
        <h1 className="text-2x1 font-bold underline underline-offset-8 decoration-blue-500 -rotate-2">
          T.K
        </h1>
      </div>
      <div className="flex items-center gap-5">
        {socials.map((socials, index) => {
          const Icon = socials.Icon;

          return (
            <Link target="_blank" href={socials.Link} key={index} aria-label={socials.Label}>
              <Icon className="size-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
        <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
          <Link href="https://google.com">Open for Work</Link>
        </MovingBorderBtn>
      </div>
    </nav>
  );
};

export default Navbar;
