"use client";
import { findAllCategory } from "@/api/category.api";
import { breakpoints } from "@/constants";
import { IData } from "@/types";
import { ICategory } from "@/types/category";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

const HeaderCategory = () => {
	const { data } = useQuery({
		queryKey: ["category"],
		queryFn: () => findAllCategory(),
	});
	const itemsCategory: IData<ICategory[]> = data;
	const items = itemsCategory?.data;
	console.log(" items~", items);
	return (
		<div className='w-full py-4 bg-[#333]'>
			<div className={`${breakpoints} flex items-center justify-between`}>
				<ul className='flex items-center gap-8'>
					{items?.map((item) => {
						return (
							<div key={item._id}>
								{item.products.length > 0 ? (
									<li>
										<Link
											href={`/${item.category_name}`}
											className='text-white font-medium text-sm flex items-center gap-1'
										>
											{item.category_name}
										</Link>
									</li>
								) : null}
							</div>
						);
					})}
				</ul>
				<div className='flex items-center gap-2 text-white font-medium text-sm'>
					<span className='text-xl'>
						<FiPhoneCall />
					</span>
					<span>(219) 555-0114</span>
				</div>
			</div>
		</div>
	);
};

export default HeaderCategory;
