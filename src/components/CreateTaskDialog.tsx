"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { PlusIcon } from "lucide-react";
import { ClipLoader } from "react-spinners";
import { createTask } from "@/app/actions/createTask";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
	title: z.string().min(1, "Title is required"),
	description: z.string().min(1, "Description is required"),
	dueDate: z.date(),
});

type FormValues = z.infer<typeof formSchema>;

export default function CreateTaskDialog() {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			description: "",
			dueDate: new Date(),
		},
	});

	const onSubmit = async (data: FormValues) => {
		setLoading(true);
		try {
			await createTask(data.title, data.description, data.dueDate);
			router.refresh();
			setOpen(false);
			form.reset();
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Card className="flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
					<CardContent className="flex flex-col items-center justify-center h-full pt-4">
						<PlusIcon className="h-12 w-12 text-gray-400" />
						<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
							Create New Task
						</p>
					</CardContent>
				</Card>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create Task</DialogTitle>
					<DialogDescription>Add a new task with a due date.</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
						{/* Title */}
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem className="col-span-4 flex flex-col gap-2">
									<FormLabel className="text-right">Title</FormLabel>
									<FormControl>
										<Input
											{...field}
											className="col-span-3"
											placeholder="Task title"
										/>
									</FormControl>
									<FormMessage className="col-start-2 col-span-3" />
								</FormItem>
							)}
						/>

						{/* Description */}
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem className="col-span-4 flex flex-col gap-2">
									<FormLabel className="text-right pt-2">Description</FormLabel>
									<FormControl>
										<Textarea
											{...field}
											className="min-h-[120px] max-h-[200px] overflow-y-auto resize-none"
											placeholder="Task description"
											rows={10}
										/>
									</FormControl>
									<FormMessage className="col-start-2 col-span-3" />
								</FormItem>
							)}
						/>

						{/* Due Date */}
						<FormField
							control={form.control}
							name="dueDate"
							render={({ field }) => (
								<FormItem className="col-span-4 flex flex-col gap-2">
									<FormLabel className="text-right">Due Date</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant="outline"
													className={cn(
														"col-span-3 text-left font-normal",
														!field.value && "text-muted-foreground"
													)}
												>
													{field.value ? (
														format(field.value, "PPP")
													) : (
														<span>Pick a date</span>
													)}
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												disabled={(date) => date < new Date()}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormMessage className="col-start-2 col-span-3" />
								</FormItem>
							)}
						/>

						<DialogFooter>
							<Button type="submit" disabled={loading}>
								{loading ? <ClipLoader size={20} /> : "Create Task"}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
