import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string;
    Icon: IconType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid md:grid-cols-2 lg:grid-cols-8 py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.Icon;
        return <div
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-md w-full p-4 overflow-hidden bg-black group-hover:ring-2 ring-blue-500 relative z-20 transition-all duration-500 cursor-pointer text-slate-400">
                <div className="py-10 z-50 relative space-y-5">
                    <Icon className="size-8 mx-auto"/>
                    <p className=" font-bold text-center text-gray-300">{item.text}</p>
                </div>
          </div>

        </div>
        })}
    </div>
  );
};

