import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Facebook, Twitter, Instagram, Linkedin, Github, Heart } from "lucide-react";

export function Footer() {
	const handleSubscribe = (e: React.FormEvent) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const email = form.email.value;

		if (email) {
			toast("Thanks for subscribing!", {
				description: "You'll receive our newsletter at " + email,
			});
			form.reset();
		}
	};

	return (
		<footer className="bg-secondary/30 py-16">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
					<div className="md:col-span-1">
						<h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
							ManageWise
						</h3>
						<p className="text-muted-foreground mb-6">
							Simplify how your team manages tasks and boost productivity.
						</p>
						<div className="flex space-x-4">
							<SocialLink href="#" icon={<Twitter className="h-4 w-4" />} />
							<SocialLink href="#" icon={<Facebook className="h-4 w-4" />} />
							<SocialLink href="#" icon={<Instagram className="h-4 w-4" />} />
							<SocialLink href="#" icon={<Linkedin className="h-4 w-4" />} />
							<SocialLink href="#" icon={<Github className="h-4 w-4" />} />
						</div>
					</div>

					<div>
						<h4 className="font-medium mb-4">Product</h4>
						<ul className="space-y-3">
							{[
								"Features",
								"Pricing",
								"Templates",
								"Integrations",
								"Customers",
								"Security",
							].map((item) => (
								<li key={item}>
									<a
										href="#"
										className="text-muted-foreground hover:text-foreground transition-colors"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="font-medium mb-4">Resources</h4>
						<ul className="space-y-3">
							{[
								"Documentation",
								"Tutorials",
								"Blog",
								"API Reference",
								"Community",
								"What's New",
							].map((item) => (
								<li key={item}>
									<a
										href="#"
										className="text-muted-foreground hover:text-foreground transition-colors"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="font-medium mb-4">Company</h4>
						<ul className="space-y-3">
							{[
								"About Us",
								"Careers",
								"Contact Us",
								"Press",
								"Partners",
								"Legal",
							].map((item) => (
								<li key={item}>
									<a
										href="#"
										className="text-muted-foreground hover:text-foreground transition-colors"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mb-12">
					<h4 className="font-medium mb-4">Subscribe to our newsletter</h4>
					<p className="text-muted-foreground mb-4">
						Get the latest updates, articles, and resources sent to your inbox.
					</p>
					<form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
						<Input
							type="email"
							name="email"
							placeholder="Enter your email"
							className="rounded-full"
							required
						/>
						<Button type="submit" className="rounded-full">
							Subscribe
						</Button>
					</form>
				</div>

				<Separator />

				<div className="flex flex-col md:flex-row justify-between items-center pt-8">
					<p className="text-sm text-muted-foreground mb-4 md:mb-0">
						© 2025 ManageWise. All rights reserved.
					</p>
					<div className="flex gap-6">
						<a href="#" className="text-sm text-muted-foreground hover:text-foreground">
							Terms of Service
						</a>
						<a href="#" className="text-sm text-muted-foreground hover:text-foreground">
							Privacy Policy
						</a>
						<a href="#" className="text-sm text-muted-foreground hover:text-foreground">
							Cookies
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

interface SocialLinkProps {
	href: string;
	icon: React.ReactNode;
}

function SocialLink({ href, icon }: SocialLinkProps) {
	return (
		<a
			href={href}
			className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors"
		>
			{icon}
		</a>
	);
}
