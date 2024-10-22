import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItems = {
    [key: string]: string;
};


export default function Nav() {
    const items:NavItems = {
        about: "/",
        contact: "/contact",
        projects: "/projects"
    }

    return (
        <ul className="list-none text-foreground ml-6 mt-40">
            {
                Object.keys(items).map(key => 
                    <NavItem key={key} label={key} href={items[key]}/>
                )
            }
        </ul>
    )
}

interface NavItemProps{
    label: string;
    href: string;
}

function NavItem({label, href}:NavItemProps) {
    const pathname = usePathname();
    return (
        <li>
            {pathname === href?<span className="text-muted-foreground">{label}</span>:<Link href={href}>{label}</Link>}
        </li>
    )
}