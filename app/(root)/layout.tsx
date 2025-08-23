import LeftSidebar from "@/components/LeftSidebar";
import React from "react";
import "../globals.css"
import { Metadata } from "next";

export const metadata :Metadata={
  title:"Podcaster",
  description:"Generate your own PodCast using AI",
  icons:{icon:"/icons/svg/logo.svg"}
}
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-black-3">
      <LeftSidebar/>
      <section className="flex min-h-screen flex-1 p-2 flex-col">
        <div className="">
          
        {children}
        </div>
        </section>
      <aside className="text-white-1">Right Sidebar</aside>
    </div>
  );
};
export default RootLayout;
