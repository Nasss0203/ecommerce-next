"use client";
import { findAllCategory } from "@/api/category.api";
import { PopularProduct } from "@/components/product";
import { IData } from "@/types";
import { ICategory } from "@/types/category";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { IoIosLaptop } from "react-icons/io";
import { IoPhonePortraitOutline, IoWatchOutline } from "react-icons/io5";
import { MdOutlineTabletAndroid } from "react-icons/md";

const categoryList = [
	{ id: "67dffa14bd08eb7424028563", name: "Laptop" },
	{ id: "67d987e5fb66cdbdd7b8f825", name: "Tablet" },
];

type cate = {
	id: string;
	label: string;
	path: string;
	icon: any;
};

const Home = () => {
	const { data } = useQuery({
		queryKey: ["category"],
		queryFn: () => findAllCategory(),
	});
	const itemsCategory: IData<ICategory[]> = data;
	const items = itemsCategory?.data || [];

	const imageMap: Record<string, any> = {
		"67d8600496bba25e72372185": <IoPhonePortraitOutline />,
		"67dffa14bd08eb7424028563": <IoIosLaptop />,
		"67d987e5fb66cdbdd7b8f825": <MdOutlineTabletAndroid />,
		"67dffa776794b371e8f51ad7": <IoWatchOutline />,
	};

	const itemCate: cate[] = items.map((item) => ({
		id: item._id,
		label: item.category_name,
		path: `/category/${item._id}`,
		icon: imageMap[item._id],
	}));

	return (
		<div className='py-5 flex flex-col gap-8'>
			<PopularProduct
				key={"67d8600496bba25e72372185"}
				category={"67d8600496bba25e72372185"}
				name={"Điện thoại"}
			></PopularProduct>
			<div className='flex justify-center px-5'>
				<div className='flex items-center gap-8  overflow-auto'>
					{itemCate.map((item: cate) => (
						<Link
							href={`/${item.label}`}
							className='flex flex-col items-center rounded-md gap-1 p-2 bg-gray-200'
							key={item.id}
						>
							<span className='text-xl'>{item.icon}</span>
							<span>
								{item.label === "phone"
									? "Điện thoại"
									: item.label === "laptop"
									? "Laptop"
									: item.label === "tablet"
									? "Tablet"
									: item.label === "smart-watch"
									? "Smart Watch"
									: ""}
							</span>
						</Link>
					))}
				</div>
			</div>
			<div className='flex flex-col gap-8'>
				{categoryList.map((item) => {
					return (
						<PopularProduct
							key={item.id}
							category={item.id}
							name={item.name}
						></PopularProduct>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
