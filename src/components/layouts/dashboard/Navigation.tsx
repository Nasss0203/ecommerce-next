"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImSpinner9 } from "react-icons/im";
import { MdDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";

const navigation = [
	{
		icon: <MdDashboard />,
		title: "Dashboard",
		path: "/dashboard/user",
	},
	{
		icon: <ImSpinner9 />,
		title: "Order",
		path: "/dashboard/order",
	},
	{
		icon: <RiSettings4Line />,
		title: "Settings",
		path: "/dashboard/settings",
	},
];

const Navigation = () => {
	const pathname = usePathname();

	return (
		<div className='col-span-1 pt-3 border border-neutral-300 rounded-md shadow-md h-fit max-h-auto'>
			<div className='flex flex-col gap-2'>
				<h4 className='px-4 font-medium'>Navigation</h4>
				<ul>
					{navigation.map((item) => {
						const isActive = pathname.startsWith(item.path);

						return (
							<li key={item.title}>
								<Link
									href={item.path}
									className={`flex items-center gap-2 px-4 py-3 ${
										isActive
											? "bg-[#616ff6] text-white"
											: " "
									}`}
								>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Navigation;
