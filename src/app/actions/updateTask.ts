"use server";

import { getServerSession } from "next-auth";
import prisma from "@/lib/db";
import { z } from "zod";

const TaskSchema = z.object({
	title: z.string(),
	description: z.string(),
	dueDate: z.date().nullable(),
});

export async function updateTask(
	taskId: number,
	title: string,
	description: string,
	dueDate: Date | null
) {
	const session = await getServerSession();

	if (!session) {
		throw new Error("You must be signed in to update a task");
	}

	const userEmail = session.user?.email;

	try {
		const findUser = await prisma.user.findUnique({
			where: { email: userEmail as string },
		});

		if (!findUser) {
			throw new Error("User not found");
		}

		const parse = TaskSchema.safeParse({ title, description, dueDate });

		if (!parse.success) {
			throw new Error("Invalid task data");
		}

		const updatedTask = await prisma.task.update({
			where: {
				id: taskId,
				userId: findUser.id,
			},
			data: {
				title: parse.data.title,
				description: parse.data.description,
				dueDate: parse.data.dueDate,
			},
		});

		return updatedTask;
	} catch (error) {
		console.error("Error updating task:", error);
		throw new Error("Failed to update task");
	}
}
