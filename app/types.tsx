import { JSX } from "react";

export type SkillType = {
    name: string;
    icon: JSX.Element;
    description: string;
    color: string;
    stack?: boolean;
};

export type SkillsByCategory = {
    [category: string]: SkillType[];
};