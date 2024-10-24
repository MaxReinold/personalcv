import { FaLinkedin, FaRegCopyright } from "react-icons/fa";

export default function Footer() {
    return <div className="absolute bottom-0 right-0 p-2 text-muted-foreground flex flex-row justify-center items-center gap-1">
        <FaRegCopyright size={14} />
        Maxwell Reinold 
        <a href="https://www.linkedin.com/in/charlesreinold/" className="ml-1 hover:text-foreground" target="_blank"><FaLinkedin /></a>
    </div>
}