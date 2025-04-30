"use client";
import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { LandingNavbar } from "@/components/landing-Navbar";

function App() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 10;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		document.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, [scrolled]);

	return (
		<div className="min-h-screen bg-background font-sans">
			<LandingNavbar scrolled={scrolled} />
			<main>
				<Hero />
				<Features />

				<Pricing />
				<FAQ />
			</main>
			<Footer />
			<Toaster />
		</div>
	);
}

export default App;
