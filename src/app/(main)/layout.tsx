import Navbar from "@/components/Navbar";
import React from "react";
type Props = {
	children: React.ReactNode;
};
const layout = ({ children }: Props) => {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};

export default layout;
