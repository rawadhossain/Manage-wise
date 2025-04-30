import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
	return (
		<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
			<div className="container px-4 mx-auto text-center relative z-10">
				<div className="inline-flex items-center gap-2 py-1 px-3 rounded-full border border-purple-200 bg-purple-50 dark:bg-purple-950/30 dark:border-purple-800 mb-8 animate-fade-in">
					<span className="text-xs font-medium text-purple-700 dark:text-purple-300">
						Welcome to ManageWise 2.0
					</span>
					<span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-600 text-white text-xs">
						✦
					</span>
				</div>

				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl mx-auto tracking-tight animate-fade-in [animation-delay:150ms]">
					<span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
						Simplify
					</span>{" "}
					how your team manages tasks
				</h1>

				<p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in [animation-delay:250ms]">
					Streamline your workflow, boost productivity, and achieve more with our
					intuitive task management platform.
				</p>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in [animation-delay:350ms]">
					<Link href="/tasks">
						<Button size="lg" className="rounded-full cursor-pointer">
							Get Started
							<ChevronRight className="ml-2 h-4 w-4" />
						</Button>
					</Link>

					<Link href="/tasks">
						<Button size="lg" variant="outline" className="rounded-full cursor-pointer">
							See how it works
						</Button>
					</Link>
				</div>

				<div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in [animation-delay:450ms]">
					<div className="flex items-center">
						<CheckCircle2 className="h-5 w-5 text-purple-600 mr-2" />
						<span className="text-sm">No credit card required</span>
					</div>
					<div className="flex items-center">
						<CheckCircle2 className="h-5 w-5 text-purple-600 mr-2" />
						<span className="text-sm">Free 14-day trial</span>
					</div>
					<div className="flex items-center">
						<CheckCircle2 className="h-5 w-5 text-purple-600 mr-2" />
						<span className="text-sm">Cancel anytime</span>
					</div>
				</div>

				<div className="relative mx-auto max-w-5xl animate-fade-in-up [animation-delay:550ms]">
					<div className="aspect-[16/9] overflow-hidden rounded-xl border shadow-xl bg-background relative z-10">
						<img
							src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt="ManageWise Dashboard"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="absolute -bottom-6 -right-6 -left-6 -top-6 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 opacity-10 blur-xl"></div>
				</div>
			</div>

			{/* Background decoration */}
			<div className="absolute top-1/3 -left-64 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
			<div className="absolute bottom-0 -right-64 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
		</section>
	);
}
