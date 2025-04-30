import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, Clock, Users, BarChart4, Blocks, Kanban, Calendar, Bot } from "lucide-react";

export function Features() {
	return (
		<section id="features" className="py-20 md:py-32 bg-secondary/30">
			<div className="container px-4 mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Powerful features to <span className="text-purple-600">supercharge</span>{" "}
						your productivity
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Everything you need to manage tasks, organize projects, and collaborate with
						your team.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<FeatureCard
						icon={<CheckSquare className="h-8 w-8 text-purple-600" />}
						title="Task Management"
						description="Create, assign, and track tasks with ease. Set priorities, deadlines, and dependencies."
					/>
					<FeatureCard
						icon={<Kanban className="h-8 w-8 text-blue-600" />}
						title="Kanban Boards"
						description="Visualize your workflow with customizable boards. Drag and drop tasks between columns."
					/>
					<FeatureCard
						icon={<Users className="h-8 w-8 text-green-600" />}
						title="Team Collaboration"
						description="Comment on tasks, share files, and collaborate in real-time with your team members."
					/>
					<FeatureCard
						icon={<Clock className="h-8 w-8 text-amber-600" />}
						title="Time Tracking"
						description="Track time spent on tasks and projects. Generate detailed reports for billing or analysis."
					/>
					<FeatureCard
						icon={<BarChart4 className="h-8 w-8 text-rose-600" />}
						title="Performance Analytics"
						description="Gain insights into your team's productivity with detailed charts and reports."
					/>
					<FeatureCard
						icon={<Calendar className="h-8 w-8 text-indigo-600" />}
						title="Calendar Integration"
						description="Sync tasks with your calendar. Get notified about upcoming deadlines and meetings."
					/>
				</div>

				{/* Advanced features section */}
				<div className="mt-24">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Advanced capabilities for{" "}
							<span className="text-purple-600">growing teams</span>
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Scale your workflow with enterprise-grade features designed for larger
							organizations.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div className="bg-background rounded-xl border p-8 shadow-sm hover:shadow-md transition-shadow">
							<Blocks className="h-12 w-12 text-purple-600 mb-6" />
							<h3 className="text-2xl font-bold mb-3">Customizable Workflows</h3>
							<p className="text-muted-foreground mb-6">
								Create custom workflows that match your team's unique processes.
								Define stages, automation rules, and approval flows.
							</p>
							<ul className="space-y-3">
								{[
									"Custom fields",
									"Automated status updates",
									"Conditional logic",
									"Process templates",
								].map((item) => (
									<li key={item} className="flex items-start">
										<div className="mr-2 mt-1 h-5 w-5 text-purple-600">✓</div>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="bg-background rounded-xl border p-8 shadow-sm hover:shadow-md transition-shadow">
							<Bot className="h-12 w-12 text-blue-600 mb-6" />
							<h3 className="text-2xl font-bold mb-3">AI-Powered Assistance</h3>
							<p className="text-muted-foreground mb-6">
								Let AI help you stay organized. Get smart suggestions, automate
								routine tasks, and predict potential bottlenecks.
							</p>
							<ul className="space-y-3">
								{[
									"Smart task prioritization",
									"Automated time estimates",
									"Risk detection",
									"Performance insights",
								].map((item) => (
									<li key={item} className="flex items-start">
										<div className="mr-2 mt-1 h-5 w-5 text-blue-600">✓</div>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
	return (
		<Card className="border bg-background/60 hover:shadow-md transition-all group">
			<CardHeader>
				<div className="mb-2">{icon}</div>
				<CardTitle className="group-hover:text-purple-600 transition-colors">
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription className="text-base">{description}</CardDescription>
			</CardContent>
		</Card>
	);
}
