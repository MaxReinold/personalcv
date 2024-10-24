"use client"

import { Separator } from "@/components/ui/separator";
import ClientLayout from "./clientLayout";
import './scrollbar.css';

export default function About() {
  return (
    <ClientLayout>
      <div className="w-full h-full flex items-center justify-center flex-col gap-4 max-w-md mx-auto text-balance text-center overflow-y-scroll">
        <h2 className="text-3xl">About Me</h2>
        <Separator/>
        <span className="inline-flex flex-row">
          <span>Athens, GA</span> 
          <Separator className="mx-4" orientation="vertical"/> 
          <a href="mailto:maxwellreinold@gmail.com" className="text-blue-300 hover:text-blue-400">Email</a>
          <Separator className="mx-4" orientation="vertical"/> 
          (678) 687-3297
        </span>
        <span className="text-muted-foreground text-sm">
          <p>
            Hi, I&apos;m Maxwell. In 6<sup>th</sup> grade I took to learning software development as a hobby. 
            Now nearly a decade later I&apos;m mastering my hobby at the <br/>University of Georgia, and hopefully your company soon!
          </p>
        </span>
      </div>
    </ClientLayout>
  );
}