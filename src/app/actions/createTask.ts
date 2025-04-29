"use server";

import { getServerSession } from "next-auth";
import { z } from "zod";
import prisma from "@/lib/db";

const TaskSchema = z.object({
	title: z.string(),
	description: z.string(),
	dueDate: z.date(),
});

export async function createTask(title: string, description: string, dueDate: Date) {
	const session = await getServerSession();

	console.log("Session:", session);
	if (!session) {
		throw new Error("You must be signed in to create a task");
	}

	const userId = session.user?.email;

	try {
		const findUser = await prisma.user.findUnique({
			where: {
				email: userId as string,
			},
		});

		if (!findUser) {
			throw new Error("User not found");
		}

		const parse = TaskSchema.safeParse({ title, description, dueDate });

		if (!parse.success) {
			throw new Error("Invalid task data");
		}

		const task = await prisma.task.create({
			data: {
				title: parse.data.title,
				description: parse.data.description,
				dueDate: parse.data.dueDate,
				userId: findUser.id,
			},
		});

		if (!task) {
			throw new Error("Failed to create task");
		}

		return task;
	} catch (error) {
		console.error("Error creating task:", error);
		throw new Error("Failed to create task");
	}
}
