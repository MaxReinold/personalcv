import { ProjectType } from "../types";

export default function ProjectCard({project}:{project:ProjectType}) {
    return <div className="w-96 rounded-lg transition-all bg-neutral-800 flex flex-col gap-2 p-2 border border-neutral-400">
        <img className="rounded-lg" src={project.thumbnail} alt={`Thumbnail for ${project.name}`} />
        <div className="text-lg font-semibold text-center">{project.name}</div>
        <div className="text-neutral-300">{project.description}</div>
    </div>
}