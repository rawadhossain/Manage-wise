import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./Themetoggle";
import { ListChecks, Menu, X } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
	scrolled: boolean;
}

export function LandingNavbar({ scrolled }: NavbarProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
				scrolled
					? "bg-background/80 backdrop-blur-md py-2 shadow-sm"
					: "bg-transparent py-4"
			)}
		>
			<div className="container flex h-12 items-center justify-between">
				<div className="pl-8 flex gap-4 items-center">
					<Link href="/" className="flex items-center space-x-2">
						<ListChecks className="h-6 w-6" />
						<span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
							ManageWise
						</span>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-8">
					<a
						href="#features"
						className="text-muted-foreground hover:text-foreground transition-colors"
					>
						Features
					</a>

					<a
						href="#pricing"
						className="text-muted-foreground hover:text-foreground transition-colors"
					>
						Pricing
					</a>
					<a
						href="#faq"
						className="text-muted-foreground hover:text-foreground transition-colors"
					>
						FAQ
					</a>
				</nav>

				<div className="hidden md:flex items-center gap-4">
					<ThemeToggle />
					<Link href="/tasks">
						<Button size="sm" className="rounded-full cursor-pointer">
							Get Started
						</Button>
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<div className="flex items-center md:hidden gap-2">
					<ThemeToggle />
					<Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
						{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</Button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden bg-background border-b animate-in slide-in-from-top-5">
					<div className="container py-4 flex flex-col space-y-4">
						<a
							href="#features"
							className="text-muted-foreground hover:text-foreground transition-colors py-2"
							onClick={toggleMenu}
						>
							Features
						</a>

						<a
							href="#pricing"
							className="text-muted-foreground hover:text-foreground transition-colors py-2"
							onClick={toggleMenu}
						>
							Pricing
						</a>
						<a
							href="#faq"
							className="text-muted-foreground hover:text-foreground transition-colors py-2"
							onClick={toggleMenu}
						>
							FAQ
						</a>
						<Button size="sm" className="rounded-full w-full">
							Get Started
						</Button>
					</div>
				</div>
			)}
		</header>
	);
}
