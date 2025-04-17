"use client";

import { findAllProduct } from "@/api/product.api";
import { ProductTypes } from "@/types";
import { IProduct } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import { CardItems } from "../card";
import { CardSkeleton } from "../skeleton";

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
				limit: 10,
				query: {
					category,
					brand,
				},
			}),
	});

	const itemsProduct: ProductTypes = data;
	const items = itemsProduct?.data?.data;
	if (isPending) {
		return (
			<div className='flex flex-col gap-6'>
				<div className='flex items-center justify-between'>
					<h2 className='font-medium text-2xl text-[#1A1A1A]'>
						{name}
					</h2>
				</div>
				<div className='grid grid-cols-5'>
					{Array.from({ length: 10 }).map((_, index) => (
						<CardSkeleton key={index} />
					))}
				</div>
			</div>
		);
	}
	return (
		<div className='flex flex-col gap-6'>
			<div className='flex items-center justify-between'>
				<h2 className='font-medium text-2xl text-[#1A1A1A]'>{name}</h2>
			</div>
			<div className='grid grid-cols-5'>
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
