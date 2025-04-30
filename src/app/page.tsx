import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			Landing Page
			<Link href="/tasks">
				<Button>Home</Button>
			</Link>
		</div>
	);
}
