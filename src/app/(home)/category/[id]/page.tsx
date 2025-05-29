"use client";
import { findAllProduct } from "@/api/product.api";
import { CardItems } from "@/components/card";
import { Filter, FilterCategory } from "@/components/filter";
import { CardSkeleton } from "@/components/skeleton";
import { ProductTypes } from "@/types";
import { IProduct } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Category() {
	const { id } = useParams();
	const [selectedBrand, setSelectedBrand] = useState<string>("");
	const [limit, setLimit] = useState(20);
	console.log(" limit~", limit);

	const { isPending, data } = useQuery({
		queryKey: ["product", id, selectedBrand, limit],
		queryFn: () =>
			findAllProduct({
				filter: {
					category: id as string,
					...(selectedBrand ? { brand: selectedBrand } : {}),
				},
				limit: limit,
			}),
	});
	console.log(" data~", data?.data?.total);
	const itemsCategory: ProductTypes = data;
	const items = itemsCategory?.data?.data;

	return (
		<div className='lg:grid-cols-5 lg:grid'>
			<FilterCategory
				selectedBrand={selectedBrand}
				id={id as string}
				setSelectedBrand={setSelectedBrand}
			></FilterCategory>

			<div className='col-span-4 flex flex-col gap-4'>
				<div className='lg:flex items-end justify-between hidden'>
					<div className='flex items-center gap-1'>
						<span className='text-[#1a1a1a] text-base font-semibold'>
							{items?.length}
						</span>
						<span className='text-[#666] text-base font-semibold'>
							Sản phẩm
						</span>
					</div>
				</div>
				<div className='flex flex-col space-y-5'>
					<Filter
						selectedBrand={selectedBrand}
						id={id as string}
						setSelectedBrand={setSelectedBrand}
					></Filter>
					<div className='grid lg:grid-cols-5 grid-cols-2'>
						{isPending ? (
							Array(15)
								.fill(0)
								.map((_item, index) => (
									<CardSkeleton key={index}></CardSkeleton>
								))
						) : (
							<>
								{items?.map((item: IProduct) => (
									<CardItems
										_id={item._id}
										image={item.product_thumb}
										price={item.product_price}
										price_discount={item.product_price}
										title={item.product_name}
										category={
											item.product_category?.category_name
										}
										rate={4.5}
										brand={item.product_brand?.brand_name}
										key={item._id}
									></CardItems>
								))}
							</>
						)}
					</div>
					<div className='flex items-center justify-center'>
						{data?.data?.total < limit ? null : (
							<button
								className='px-5 py-3 rounded-md bg-blue-500 font-medium text-white '
								onClick={() => setLimit(limit + 20)}
							>
								Load more
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
