"use client"

import { Button } from "@/components/ui/button"
import { FileText, CircleUser } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn"
import { openInNewTab } from "../utils"

export default function Main() {return (
        <div className="flex flex-col gap-2">
            <CircleUser size={128}/>
            <div className="text-3xl name">Maxwell Reinold</div>
            <div>
                <div className="text-gray-400 text-md font-semibold">Fullstack Developer</div>
                <div className="text-gray-400 text-sm"><span className="mx-1">📍</span>Atlanta, Georgia</div>
                <div className="text-gray-400">Bachelor of Computer Science</div>
                <div className="text-gray-400 text-sm ml-4 pl-1">University of Georgia</div>
            </div>
            <div className="flex gap-4 items-center justify-between">
                <Button variant="outline" className="transition-background hover:cursor-pointer hover:bg-gray-800 hover:scale-110" onClick={() => {
                    openInNewTab("/Resume.pdf");
                }}>
                    <FileText />Resume
                </Button>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="h-8 w-8 transition-background hover:bg-gray-800 rounded-full hover:cursor-pointer hover:scale-125" onClick={() => {
                        openInNewTab("https://github.com/MaxReinold/");
                    }}>
                        <FontAwesomeIcon icon={faGithub} className="text-xl"/>
                    </Button>
                    <Button variant="ghost" className="h-8 w-8 transition-background hover:bg-gray-800 rounded-full hover:cursor-pointer hover:scale-125" onClick={() => {
                        openInNewTab("https://www.linkedin.com/in/charlesreinold/");
                    }}>
                        <FontAwesomeIcon icon={faLinkedinIn} className="text-xl"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}