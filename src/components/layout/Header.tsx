interface HeaderProps {
    title: string;
    subtitle: string;
}

export default function Header({title, subtitle}: HeaderProps) {
    return (
        <div className="p-6 font-extralight flex flex-col">
            <span className="text-foreground text-5xl ">{title}</span>
            <span className="text-muted-foreground text-sm">{subtitle}</span>
        </div>
    )
}