import Projects from "./projects";
import Skills from "./skills";

export default function Information() {
    return (
        <div className="flex flex-col items-center w-full h-full my-32 font-sans blurbg">
            <Skills />
            <Projects />
            <style jsx>{`
                .blurbg {
                    z-index: 1;
                }
                .blurbg::before {
                    filter: blur(10px);
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    )
}