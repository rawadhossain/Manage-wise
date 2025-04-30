"use server";

import prisma from "@/lib/db";
import { getServerSession } from "next-auth";

export const deleteTask = async (id: number) => {
	try {
		const session = await getServerSession();

		if (!session) {
			throw new Error("You must be signed in to delete a task");
		}

		const userEmail = session.user?.email;

		const findUser = await prisma.user.findUnique({
			where: {
				email: userEmail as string,
			},
		});

		if (!findUser) {
			throw new Error("User not found");
		}

		const task = await prisma.task.delete({
			where: {
				id: id,
				userId: findUser.id,
			},
		});

		if (!task) {
			throw new Error("Task not found");
		}

		return task;
	} catch (error) {
		console.error("Error deleting task:", error);
		throw new Error("Failed to delete task");
	}
};
