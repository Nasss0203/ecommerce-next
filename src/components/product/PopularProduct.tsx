"use client";

import { findAllProduct } from "@/api/product.api";
import { ProductTypes } from "@/types";
import { IProduct } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import { CardItems } from "../card";
import { CardSkeleton } from "../skeleton";
import { Skeleton } from "../ui/skeleton";

const PopularProduct = ({
	brand,
	category,
	name,
}: {
	category: string;
	brand?: string;
	name: string;
}) => {
	const { data, isPending } = useQuery({
		queryKey: ["product", category, brand],
		queryFn: () =>
			findAllProduct({
				limit: 12,
				query: {
					category,
					brand,
				},
			}),
	});

	const itemsProduct: ProductTypes = data;
	const items = itemsProduct?.data?.data;

	// function shuffleArray<T>(array: T[], times: number = 1): T[] {
	// 	for (let t = 0; t < times; t++) {
	// 		for (let i = array.length - 1; i > 0; i--) {
	// 			const j = Math.floor(Math.random() * (i + 1));
	// 			[array[i], array[j]] = [array[j], array[i]];
	// 		}
	// 	}
	// 	return array;
	// }

	// const shuffledItemCate = shuffleArray(items || [], 3);

	if (isPending) {
		return (
			<div className='flex flex-col gap-6'>
				<div className='flex items-center justify-between'>
					<Skeleton className='w-[100px] h-5' />
				</div>
				<div className='grid lg:grid-cols-6 grid-cols-2'>
					{Array.from({ length: 12 }).map((_, index) => (
						<CardSkeleton key={index} />
					))}
				</div>
			</div>
		);
	}
	return (
		<div className='flex flex-col gap-6 p-5 bg-gray-200 rounded-xl'>
			<div className='flex items-center justify-between'>
				<h2 className='font-medium text-2xl text-[#1A1A1A]'>{name}</h2>
			</div>
			<div className='grid lg:grid-cols-6 grid-cols-2 md:grid-cols-4 gap-2'>
				{items?.map((item: IProduct) => (
					<CardItems
						category={item.product_category?.category_name}
						_id={item._id}
						image={item.product_thumb}
						price={item.product_price}
						price_discount={item.product_price}
						title={item.product_name}
						rate={4.5}
						key={item._id}
						brand={item?.product_brand?.brand_name}
					></CardItems>
				))}
			</div>
		</div>
	);
};

export default PopularProduct;
