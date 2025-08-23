"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sidebarLinks } from "../constants/navLinks";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const LeftSidebar = () => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6 ">
        <Link
          href="/"
          className="flex gap-2 cursor-pointer items-center pb-10 justify-start"
        >
          <Image src="/icons/logo.svg" alt="logo" width={20} height={20} />
          <h1 className="font-extrabold">PodCaster</h1>
        </Link>
        {sidebarLinks.map(({ label, route, imgURL }) => {
          const isActive =
            pathName === route || pathName.startsWith(`${route}/`);
          return (
            <Link
              key={label}
              href={route}
              className={cn(
                `flex gap-3 cursor-pointer items-center justify-start py-2`,
                { "navbar-gradient border-r-4 border-orange-1": isActive }
              )}
            >
              <Image
                src={imgURL}
                alt={`${label} icon`}
                width={20}
                height={20}
              />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};
export default LeftSidebar;
