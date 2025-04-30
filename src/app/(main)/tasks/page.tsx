import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import TaskCard from "@/components/Task-Card";
import CreateTaskDialog from "@/components/CreateTaskDialog";

const home = async () => {
	const session = await getServerSession();

	if (!session) {
		redirect("/signin");
	}

	const user = session?.user;

	const tasks = await prisma.task.findMany({
		where: {
			user: {
				email: user?.email,
			},
		},
	});
	return (
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 min-h-screen">
			<header className="text-center mb-16">
				<h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
					<span className="font-bold text-blue-500">
						Manage
						<span className="text-gray-800 dark:text-[#E7E9EC]">Wise</span>
					</span>{" "}
				</h1>
				<p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
					Add your tasks and keep track of it
				</p>
			</header>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{tasks.map((task) => (
					<TaskCard key={task.id} task={{ ...task, id: task.id.toString() }} />
				))}

				<CreateTaskDialog />
			</div>
		</div>
	);
};

export default home;
