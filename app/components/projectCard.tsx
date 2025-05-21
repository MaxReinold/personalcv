import { ProjectType, SkillType } from "../types";
import { skills } from "../data";

export default function ProjectCard({project}:{project:ProjectType}) {
    return (
        <div className="w-80 sm:w-96 rounded-xl bg-neutral-800 border border-neutral-700 shadow-lg flex flex-col gap-3 p-4 transition-all hover:scale-[1.025] hover:shadow-2xl hover:border-white/30 duration-200">
            <div className="w-full aspect-video overflow-hidden rounded-lg bg-neutral-700 flex items-center justify-center">
                <img className="object-cover w-full h-full" src={project.thumbnail} alt={`Thumbnail for ${project.name}`} />
            </div>
            <div className="text-xl font-bold text-center text-white mt-2">{project.name}</div>
            <div className="text-neutral-300 text-center text-sm mb-2">{project.description}</div>
            <div className="flex flex-row flex-wrap gap-2 justify-center mt-2">
                {project.skills && project.skills.map((skillKey, idx) => {
                    const skill = skills[skillKey.toLowerCase()];
                    return skill ? (
                        <span key={idx} title={skill.name} className="w-6 h-6 flex items-center justify-center rounded-full bg-neutral-700 border border-neutral-600">
                            <span className="w-4 h-4 flex items-center justify-center">{skill.icon}</span>
                        </span>
                    ) : null;
                })}
            </div>
        </div>
    );
}