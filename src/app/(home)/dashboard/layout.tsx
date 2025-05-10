import { Navigation } from "@/components/layouts";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='lg:grid grid-cols-4 gap-5'>
			<Navigation></Navigation>
			<div className='border border-gray-300 rounded-md shadow-md col-span-3'>
				{children}
			</div>
		</div>
	);
};

export default layout;
