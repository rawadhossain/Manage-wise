import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		question: "How does ManageWise compare to other task management tools?",
		answer: "ManageWise combines the best features of various task management solutions with a more intuitive interface, customizable workflows, and AI-powered automation. Our platform is designed to be flexible enough for any team size while remaining easy to use.",
	},
	{
		question: "Can I migrate data from another task management platform?",
		answer: "Yes! We offer migration tools for popular platforms like Asana, Trello, and Monday.com. Our support team can also assist with custom migrations from other tools. Most migrations can be completed in less than a day with no disruption to your workflow.",
	},
	{
		question: "Do you offer a free trial for paid plans?",
		answer: "Absolutely. All paid plans come with a 14-day free trial with no credit card required. You'll get full access to all features during your trial period so you can properly evaluate if ManageWise is right for your team.",
	},
	{
		question: "Is ManageWise suitable for enterprise organizations?",
		answer: "Yes, our Business plan offers enterprise-grade features including advanced security controls, custom integrations, and dedicated support. We serve many Fortune 500 companies and can customize solutions for organizations of any size.",
	},
	{
		question: "What kind of support do you offer?",
		answer: "Free users receive community support and access to our documentation. Pro users get email support with 24-hour response times. Business users receive priority support with 4-hour response times and a dedicated customer success manager for onboarding and optimization.",
	},
	{
		question: "Can I use ManageWise on mobile devices?",
		answer: "Yes, ManageWise works on any device with a web browser. We also offer native mobile apps for iOS and Android that allow you to manage tasks, track time, and collaborate with your team while on the go.",
	},
];

export function FAQ() {
	return (
		<section id="faq" className="py-20 md:py-32">
			<div className="container px-4 mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Frequently Asked <span className="text-purple-600">Questions</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Everything you need to know about ManageWise. Can't find the answer you're
						looking for? Contact our support team.
					</p>
				</div>

				<div className="max-w-3xl mx-auto">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={index} value={`item-${index}`}>
								<AccordionTrigger className="text-left text-lg font-medium">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
