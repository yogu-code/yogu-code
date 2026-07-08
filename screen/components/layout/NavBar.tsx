import { Button, buttonVariants } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, ChevronDown, Phone, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
export function NavBar() {
    return (
        <header className="flex items-center justify-between border-b border-neutral-200 px-8 py-5 sm:px-16">
            <span className="text-sm font-medium tracking-tight">
                Yogu&apos;s Portfolio
            </span>

            <div className="flex items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                        className: "gap-1.5 text-sm font-medium",
                    })}>
                        Contact me
                        <ChevronDown className="ml-2 h-3.5 w-3.5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuItem>
                            <a href="tel:+918779269045" className="flex items-center gap-2 w-full">
                                <Phone className="h-4 w-4" />
                                +91 87792 69045
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href="mailto:yogeshrane019@gmail.com" className="flex items-center gap-2 w-full">
                                <Mail className="h-4 w-4" />
                                yogeshrane019@gmail.com
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a
                                href="https://github.com/yogu-code"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 w-full"
                            >
                                <FaGithub className="h-4 w-4" />
                                github.com/yogu-code
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a
                                href="https://www.linkedin.com/in/yogesh-rane-503226345"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 w-full"
                            >
                                <FaLinkedin className="h-4 w-4" />
                                linkedin.com/in/yogesh-rane
                            </a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1.5 text-sm font-medium"
                ><a href="/resume.pdf" className="flex items-center gap-2 w-full">

                        Resume
                        <Download className="h-3.5 w-3.5" />
                    </a>
                </Button>
            </div>
        </header>
    )
}