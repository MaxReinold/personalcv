import { JSX } from "react";

export type SkillType = {
    name: string;
    icon: JSX.Element;
    description: string;
    color: string;
};

export type SkillsByCategory = {
    [category: string]: SkillType[];
};