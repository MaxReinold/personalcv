import { projects } from "../data";
import { ProjectType } from "../types";
import ProjectCard from "./projectCard";
import SectionHeading from "./sectionHeading";

export default function Projects() {
    return (
        <div className="w-full flex flex-col items-center gap-6 ">
            <SectionHeading>Projects</SectionHeading>
            <div className="flex flex-wrap justify-center gap-8 w-full">
                {projects.map((project: ProjectType, index: number) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </div>
    );
}