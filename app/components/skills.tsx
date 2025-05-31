"use client"

import { useState } from "react";
import Skill from "./skill";
import { skills } from '@/app/data';
import { categories } from "../types";
import { cn } from "@/lib/utils";
import SectionHeading from "./sectionHeading";

export default function Skills() {
    const [category, setCategory] = useState(categories[1]);
    const skillsArray = Object.keys(skills).map(key => skills[key]);

    return (
        <div className={cn("flex flex-col gap-4 w-full items-center relative transition-all pb-8 max-w-4xl")}>
        <SectionHeading>Skills</SectionHeading>
            <div className="flex flex-row gap-10">
                {categories.map((key, index) => {
                    return (
                        <div 
                            className={cn(
                                "border border-[#0000] p-1 rounded-lg px-3 hover:cursor-pointer transition-all hover:scale-105",
                                 key == category && "border-white hover:cursor-default scale-105"
                            )}
                            onClick={() => setCategory(key)}
                            key={index}
                        >
                            {key}
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-row flex-wrap w-full gap-4 justify-center">
                {   
                    skillsArray.filter((skill) => skill.category == category || category == "All Skills").map((skill, index) => <Skill skill={skill} key={index}/>)
                }
            </div>
        </div>
    );
}