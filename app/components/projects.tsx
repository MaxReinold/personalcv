import { projects } from "../data";
import { ProjectType } from "../types";
import ProjectCard from "./projectCard";
import SectionHeading from "./sectionHeading";

export default function Projects() {
    return <div className="w-full flex justify-center flex-col items-center gap-4">
        <SectionHeading>Projects</SectionHeading>
        <div>
            {projects.map((project:ProjectType, index:number) => <ProjectCard project={project} key={index}/>)}
        </div>
    </div>
}