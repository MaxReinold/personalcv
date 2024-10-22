"use client";

import ThemeController from "@/components/custom/ThemeController";
import Header from "@/components/layout/Header";
import Nav from "@/components/layout/Nav";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const localTheme = localStorage.getItem('darkmode');
    let parsedTheme = localTheme ? JSON.parse(localTheme): false;

    const [isDarkMode, setDarkMode] = useState(parsedTheme);

    const updateDarkMode = (newVal:boolean) => {
        localStorage.setItem('darkmode', JSON.stringify(newVal))
        setDarkMode(newVal);
    }

    return (
        <div className={cn(`absolute inset-0`, isDarkMode && 'dark')}>
            <div className={'absolute inset-0 bg-background text-foreground'}>
                <div className="absolute inset-10 border-muted border">
                    <Header title="Maxwell Reinold" subtitle="Software Developer" />
                    <main className="absolute w-3/4 h-[90%] bottom-0 right-0">{children}</main>
                    <Nav />
                </div>
                <ThemeController value={isDarkMode} setValue={(newVal) => updateDarkMode(newVal)} />
            </div>
        </div>
    );
}
