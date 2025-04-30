"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { ThemeToggle } from "./Themetoggle";
import { GithubIcon, ListMinus, TwitterIcon, Menu, X, ListChecks } from "lucide-react";
import Link from "next/link";

import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";

const socialLinks = [
	{
		name: "GitHub",
		href: "https://github.com/rawadhossain",
		icon: GithubIcon,
	},
	{
		name: "Twitter",
		href: "https://twitter.com/RawadHossain",
		icon: TwitterIcon,
	},
] as const;

export default function Navbar() {
	const session = useSession();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return (
		<div className="sticky top-0 z-50 py-5 w-full bg-white/90 backdrop-blur-md dark:bg-[#0a0a0a]/90 sm:px-6 px-4 dark:border-gray-700">
			<div className="container flex h-12 items-center justify-between">
				<div className="flex gap-4 items-center">
					<Link href="/" className="flex items-center space-x-2">
						<ListChecks className="h-6 w-6" />

						<h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent cursor-pointer">
							ManageWise
						</h1>
					</Link>
				</div>
				<div className="flex items-center gap-4">
					<div className="hidden md:flex md:flex-row md:gap-4">
						{socialLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
								aria-label={link.name}
							>
								<link.icon className="h-5 w-5" />
							</a>
						))}
					</div>
					<div className="hidden md:block">
						{session.data?.user ? (
							<Button
								onClick={() => signOut()}
								className="px-6 py-1 bg-blue-500 text-white hover:bg-blue-700 transition-colors cursor-pointer"
							>
								Logout
							</Button>
						) : (
							<Button
								onClick={() => signIn()}
								className="px-6 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
							>
								Login
							</Button>
						)}
					</div>
					<ThemeToggle />
					<Button
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</Button>
				</div>
			</div>
			{isMenuOpen && (
				<>
					<div className="fixed inset-0 z-40" onClick={() => setIsMenuOpen(false)} />
					<div
						ref={menuRef}
						className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-[#121212] shadow-lg z-50 transform transition-transform duration-300 ease-in-out flex flex-col min-h-screen"
					>
						<div className="flex flex-col h-full p-4">
							<Button
								className="self-end mb-4"
								onClick={() => setIsMenuOpen(false)}
								aria-label="Close menu"
							>
								<X className="h-6 w-6" />
							</Button>
							<div className="flex flex-col items-center flex-grow gap-4 mt-20">
								<div className="flex flex-col gap-4">
									{socialLinks.map((link) => (
										<a
											key={link.name}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											cursor-pointer
											className="flex items-center gap-2 p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
											aria-label={link.name}
										>
											<link.icon className="h-5 w-5" />
											<span className="text-sm">{link.name}</span>
										</a>
									))}
								</div>
								<div>
									{session.data?.user ? (
										<Button
											onClick={() => {
												signOut();
												setIsMenuOpen(false);
											}}
											className="w-full px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
										>
											Logout
										</Button>
									) : (
										<Button
											onClick={() => {
												signIn();
												setIsMenuOpen(false);
											}}
											className="cursor-pointer w-full px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
										>
											Login
										</Button>
									)}
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
