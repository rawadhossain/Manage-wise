"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import { deleteTask } from "@/app/actions/deleteTask";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import EditTaskDialog from "./EditTaskDialog";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

type Task = {
	id: string;
	title: string;
	description: string;
	dueDate: Date | null;
};

export default function TaskCard({ task }: { task: Task }) {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const deleteTaskHandler = async (id: string) => {
		try {
			setLoading(true);
			await deleteTask(Number(id));
			router.refresh();
		} catch (error) {
			console.error("Error deleting task:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async (e: React.FormEvent) => {
		e.preventDefault();
		await deleteTaskHandler(task.id);
	};

	return (
		<Card className="flex flex-col">
			<CardHeader>
				<CardTitle className="mb-2">{task.title}</CardTitle>
				<hr className="border-gray-300 dark:border-gray-700" />
			</CardHeader>
			<CardContent>
				<p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
					{task.description}
				</p>

				{task.description.length > 300 && (
					<Dialog>
						<DialogTrigger asChild>
							<Button
								variant="link"
								className="p-0 h-auto text-sm mt-1 hover:text-blue-400 cursor-pointer"
							>
								...see full details
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>{task.title}</DialogTitle>
							</DialogHeader>
							<p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
								{task.description}
							</p>
						</DialogContent>
					</Dialog>
				)}

				<p className="mt-2 text-xs text-gray-400 dark:text-gray-600">
					{task.dueDate ? task.dueDate.toDateString() : "No due date"}
				</p>
			</CardContent>

			<CardFooter className="flex justify-between">
				<EditTaskDialog task={task} />

				<form onSubmit={handleDelete}>
					<input type="hidden" name="id" value={task.id} />
					<Button
						className="cursor-pointer"
						type="submit"
						variant="destructive"
						disabled={loading}
					>
						{loading ? <ClipLoader size={20} color="#fff" /> : "Delete"}
					</Button>
				</form>
			</CardFooter>
		</Card>
	);
}
