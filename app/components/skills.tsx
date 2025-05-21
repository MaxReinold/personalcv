"use client"

import { useState } from "react";
import Skill from "./skill";
import { skills } from '@/app/data';
import { cn } from "@/lib/utils";
import SectionHeading from "./sectionHeading";

export default function Skills() {
    const skillTitles = Object.keys(skills);
    
    const [allSkills] = useState(() => {
        const modifiedSkills = { ...skills };
        
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        if (skillTitles.includes("All Skills") && Array.isArray(skills["All Skills"]) && skills["All Skills"].length === 0) {
            modifiedSkills["All Skills"] = Object.entries(skills)
            .filter(([key]) => key !== "All Skills")
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .flatMap(([_, skillArray]) => {
                return skillArray
            });
        }
        
        return modifiedSkills;
    });
    
    const [selectedSkill, setSelectedSkill] = useState<string>(skillTitles[1]);

    const changeSelectedSkill = (newSkill:string) => {
        setSelectedSkill(newSkill);
    }
    
    return (
        <div className={cn("flex flex-col gap-4 w-full items-center relative transition-all pb-8 max-w-4xl")}>
            <SectionHeading>Skills</SectionHeading>
            <div className="flex flex-row gap-10">
                {skillTitles.map((key, index) => {
                    return (
                        <div 
                            className={cn(
                                "border border-[#0000] p-1 rounded-lg px-3 hover:cursor-pointer transition-all hover:scale-105",
                                 key == selectedSkill && "border-white hover:cursor-default scale-105"
                            )}
                            onClick={() => changeSelectedSkill(key)}
                            key={index}
                        >
                            {key}
                        </div>
                    )
                })}
            </div>
            {
                skillTitles.map((title, tIndex) => {
                    const currentSkillArray = allSkills[title] || [];
                    
                    return <div className={
                            cn(
                                "flex flex-row flex-wrap w-full gap-4 justify-center absolute top-[6.15rem] transition-opacity opacity-0 pointer-events-none", 
                                title == selectedSkill && "opacity-100 pointer-events-auto relative top-0"
                            )} key={tIndex}
                            >
                        {
                            currentSkillArray.map((skill, index) => <Skill skill={skill} key={index}/>)
                        }
                    </div>
                })
            }
        </div>
    );
}