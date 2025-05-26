"use client";
import { findAllCategory } from "@/api/category.api";
import { breakpoints } from "@/constants";
import { IData } from "@/types";
import { ICategory } from "@/types/category";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const HeaderCategory = () => {
	const { data } = useQuery({
		queryKey: ["category"],
		queryFn: () => findAllCategory(),
	});
	const itemsCategory: IData<ICategory[]> = data;
	const items = itemsCategory?.data || [];

	return (
		<div className='w-full md:py-4 py-2 bg-[#333]'>
			<div className={`${breakpoints} flex items-center justify-between`}>
				<ul className='flex items-center gap-4 md:gap-8 overflow-x-auto'>
					{items?.map((item) => {
						return (
							<div key={item._id}>
								{item.products.length > 0 ? (
									<li>
										<Link
											href={`/${item.category_name}`}
											className='text-white font-medium text-sm flex items-center gap-1'
										>
											{item.category_name === "phone"
												? "Điện thoại"
												: item.category_name ===
												  "laptop"
												? "Laptop"
												: item.category_name ===
												  "tablet"
												? "Tablet"
												: item.category_name ===
												  "smart-watch"
												? "Smart Watch"
												: ""}
										</Link>
									</li>
								) : null}
							</div>
						);
					})}
				</ul>
				<div className='lg:flex items-center gap-2 text-white font-medium text-sm hidden'></div>
			</div>
		</div>
	);
};

export default HeaderCategory;
