import { ProjectType } from "../types";
import { skills } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import { openInNewTab } from "../utils";

export default function ProjectCard({project}:{project:ProjectType}) {
    const mainSkill = project.skills && project.skills.length > 0 ? skills[project.skills[0].toLowerCase()] : undefined;
    const themeColor = mainSkill?.color || "#222";

    return (
        <div
            className="w-80 sm:w-96 rounded-xl border border-neutral-700 shadow-lg flex flex-col gap-3 p-4 transition-all hover:scale-[1.025] hover:shadow-2xl hover:border-white/30 duration-200 relative overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${themeColor}20 0%, #18181b 60%)`,
            }}
        >
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
                background: `radial-gradient(circle at 70% 30%, ${themeColor}33 0%, transparent 70%)`
            }} />
            <div className="w-full aspect-video overflow-hidden rounded-lg bg-neutral-700 flex items-center justify-center relative z-10">
                <img className="object-cover w-full h-full" src={project.thumbnail} alt={`Thumbnail for ${project.name}`} />
            </div>
            <div className="text-xl font-bold text-center text-white mt-2 relative z-10">{project.name}</div>
            <div className="text-neutral-300 text-center text-sm mb-2 relative z-10">{project.description}</div>
            <div className="flex justify-between relative z-10">
                <div className="flex flex-row flex-wrap gap-2 justify-start mt-2 w-fit">
                    {
                        project.github && <FontAwesomeIcon icon={faGithub} className="text-3xl hover:cursor-pointer hover:scale-105 hover:rotate-6 transition-all drop-shadow-none hover:drop-shadow-sm hover:drop-shadow-white/30" onClick={() => openInNewTab(project.github!)} />
                    }
                </div>
                <div className="flex flex-row flex-wrap gap-2 justify-center items-center mt-2 w-fit rounded-full bg-neutral-700 border border-neutral-600 px-1">
                    {project.skills && project.skills.map((skillKey, idx) => {
                        const skill = skills[skillKey.toLowerCase()];
                        return skill ? (
                            <span key={idx} title={skill.name} className="w-6 h-6 flex items-center justify-center overflow-clip">
                                <span className="w-5 h-5 flex items-center justify-center grow-icon">{skill.icon}</span>
                            </span>
                        ) : null;
                    })}
                </div>
            </div>
        </div>
    );
}