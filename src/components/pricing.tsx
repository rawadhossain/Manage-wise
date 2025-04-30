import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const planFeatures = {
	free: [
		"Up to 3 projects",
		"Basic task management",
		"Up to 5 team members",
		"Basic reporting",
		"1GB storage",
	],
	pro: [
		"Unlimited projects",
		"Advanced task management",
		"Up to 15 team members",
		"Advanced reporting & analytics",
		"10GB storage",
		"Priority support",
		"Custom fields",
		"Guest access",
	],
	business: [
		"Unlimited projects",
		"Advanced task management",
		"Unlimited team members",
		"Advanced reporting & analytics",
		"Unlimited storage",
		"24/7 priority support",
		"Custom fields & workflows",
		"Admin controls",
		"SSO authentication",
		"API access",
		"Dedicated success manager",
	],
};

export function Pricing() {
	const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

	const toggleBillingCycle = () => {
		setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly");
	};

	return (
		<section id="pricing" className="py-20 md:py-32 bg-secondary/30">
			<div className="container px-4 mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Simple, transparent <span className="text-purple-600">pricing</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Choose a plan that fits your team's needs, with no hidden fees or unexpected
						charges.
					</p>

					<div className="flex items-center justify-center mt-8">
						<span
							className={cn(
								"mr-3",
								billingCycle === "monthly"
									? "text-foreground"
									: "text-muted-foreground"
							)}
						>
							Monthly
						</span>
						<button
							type="button"
							className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
							onClick={toggleBillingCycle}
						>
							<span
								className={cn(
									"inline-block h-5 w-5 rounded-full bg-white shadow-md transform transition-transform dark:bg-gray-200",
									billingCycle === "annual" ? "translate-x-6" : "translate-x-1"
								)}
							/>
						</button>
						<span
							className={cn(
								"ml-3 flex items-center",
								billingCycle === "annual"
									? "text-foreground"
									: "text-muted-foreground"
							)}
						>
							Yearly
							<span className="ml-2 text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 py-0.5 px-1.5 rounded-full">
								Save 20%
							</span>
						</span>
					</div>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					<PricingCard
						title="Free"
						description="Perfect for small teams or individuals just getting started."
						price={billingCycle === "monthly" ? "0" : "0"}
						billingCycle={billingCycle}
						features={planFeatures.free}
						buttonVariant="outline"
						popular={false}
					/>
					<PricingCard
						title="Pro"
						description="Ideal for growing teams that need more advanced features."
						price={billingCycle === "monthly" ? "12" : "115"}
						billingCycle={billingCycle}
						features={planFeatures.pro}
						buttonVariant="default"
						popular={true}
					/>
					<PricingCard
						title="Business"
						description="For large organizations with complex workflows and security needs."
						price={billingCycle === "monthly" ? "29" : "278"}
						billingCycle={billingCycle}
						features={planFeatures.business}
						buttonVariant="outline"
						popular={false}
					/>
				</div>

				<div className="text-center mt-12">
					<p className="text-sm text-muted-foreground mb-2">
						Need a custom plan for your enterprise?
					</p>
					<Button variant="link" className="text-purple-600">
						Contact us for custom pricing
					</Button>
				</div>
			</div>
		</section>
	);
}

interface PricingCardProps {
	title: string;
	description: string;
	price: string;
	billingCycle: "monthly" | "annual";
	features: string[];
	buttonVariant: "default" | "outline";
	popular: boolean;
}

function PricingCard({
	title,
	description,
	price,
	billingCycle,
	features,
	buttonVariant,
	popular,
}: PricingCardProps) {
	return (
		<Card
			className={cn(
				"border bg-background flex flex-col h-full relative overflow-hidden transition-all hover:shadow-md",
				popular && "border-purple-300 dark:border-purple-800"
			)}
		>
			{popular && (
				<div className="absolute top-0 right-0">
					<div className="bg-purple-600 text-white text-xs px-3 py-1 font-medium">
						Popular
					</div>
				</div>
			)}
			<CardHeader>
				<CardTitle className="text-2xl">{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="flex-grow">
				<div className="mb-6">
					<span className="text-4xl font-bold">${price}</span>
					<span className="text-muted-foreground ml-1">
						{price === "0" ? "" : `/user/${billingCycle === "monthly" ? "mo" : "yr"}`}
					</span>
				</div>
				<ul className="space-y-3">
					{features.map((feature) => (
						<li key={feature} className="flex items-start">
							<Check className="mr-2 mt-1 h-4 w-4 text-green-600" />
							<span className="text-sm">{feature}</span>
						</li>
					))}
				</ul>
			</CardContent>
			<CardFooter>
				<Button
					variant={buttonVariant}
					className={cn(
						"w-full rounded-full",
						popular &&
							buttonVariant === "default" &&
							"bg-purple-600 hover:bg-purple-700"
					)}
				>
					{price === "0" ? "Start for Free" : "Start Free Trial"}
				</Button>
			</CardFooter>
		</Card>
	);
}
