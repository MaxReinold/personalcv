import { SkillType } from "../types";

type SkillProps = {
    skill: SkillType;
};

export default function Skill({ skill }: SkillProps) {return (
        <div className="flex flex-row items-center gap-2 p-1 font-sans w-48 rounded-lg transition-all bg-neutral-900 skill-card">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg p-2 icon transition-all">
                {skill.icon}
            </div>
            <div>
                <div className="font-bold text-sm">{skill.name}</div>
                <div className="font-light text-xs opacity-70">{skill.description}</div>
            </div>
            <style jsx>{`
                .icon {
                    background-color: ${skill.color}20;
                }
                .skill-card:hover>.icon {
                    background-color: ${skill.color}40;
                }
                .skill-card:hover {
                    filter: drop-shadow(2px 2px 4px ${skill.color}40);
                    scale: 1.05;
                }
                .skill-card {
                    border: 1px solid ${skill.color}40;
                }
            `}</style>
        </div>
    )
}