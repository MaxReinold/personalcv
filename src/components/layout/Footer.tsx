import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
    return <div className="absolute bottom-0 right-0 p-3 text-muted-foreground flex flex-row justify-center items-center gap-1 text-xs">
        <FaRegCopyright size={10} />
        Inspired by <a href="https://p5aholic.me/info/">Keita Yamada</a>
    </div>
}