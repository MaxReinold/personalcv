import { JSX } from "react";

export const categories = [
    "All Skills",
    "Current Stack",
"Other Languages & Frameworks",
    "Databases",
    "Tools",
]

export type SkillType = {
    name: string;
    icon: JSX.Element;
    description: string;
    color: string;
    category: string;
};

export type ProjectType = {
    name: string;
    description: string;
    skills: string[];
    thumbnail: string;
    github?: string;
    live?: string;
}