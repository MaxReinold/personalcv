"use client";

import ThemeController from "@/components/custom/ThemeController";
import Header from "@/components/layout/Header";
import Nav from "@/components/layout/Nav";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import './scrollbar.css'
import Footer from "@/components/layout/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isDarkMode, setDarkMode] = useState<boolean | null>(null); 

    useEffect(() => {
        const savedMode = localStorage.getItem('darkmode');
        if (savedMode) {
            setDarkMode(JSON.parse(savedMode));
        } else {
            setDarkMode(true); 
        }
    }, []);

    const updateDarkMode = (newVal: boolean) => {
        localStorage.setItem('darkmode', JSON.stringify(newVal));
        setDarkMode(newVal);
    };

    if (isDarkMode === null) {
        return null; 
    }

    return (
        <div className={cn(`absolute inset-0`, isDarkMode && 'dark')}>
            <div className={'absolute inset-0 bg-background text-foreground'}>
                <div className="absolute inset-10 border-muted border">
                    <Header title="Maxwell Reinold" subtitle="Software Developer" />
                    <main className="absolute w-3/4 h-full bottom-0 right-0 overflow-hidden">{children}</main>
                    <Nav />
                </div>
                <ThemeController value={isDarkMode} setValue={(newVal) => updateDarkMode(newVal)} />
                <Footer />
            </div>
            <Toaster />
        </div>
    );
}
