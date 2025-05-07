"use client";
import { findAllProduct } from "@/api/product.api";
import { CardItems } from "@/components/card";
import { Filter, FilterCategory } from "@/components/filter";
import { CardSkeleton } from "@/components/skeleton";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ProductTypes } from "@/types";
import { IProduct } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Category() {
	const { id } = useParams();
	const [selectedBrand, setSelectedBrand] = useState<string>("");
	console.log(" selectedBrand~", selectedBrand);
	const { isPending, data } = useQuery({
		queryKey: ["product", id, selectedBrand],
		queryFn: () =>
			findAllProduct({
				filter: {
					category: id as string,
					...(selectedBrand ? { brand: selectedBrand } : {}),
				},
			}),
	});
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
					<Select>
						<SelectTrigger className='w-[180px]'>
							<SelectValue placeholder='Theme' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='light'>Light</SelectItem>
							<SelectItem value='dark'>Dark</SelectItem>
							<SelectItem value='system'>System</SelectItem>
						</SelectContent>
					</Select>
					<div className='flex items-center gap-1'>
						<span className='text-[#1a1a1a] text-base font-semibold'>
							{items?.length}
						</span>
						<span className='text-[#666] text-base font-semibold'>
							Results Found
						</span>
					</div>
				</div>
				<div className='flex flex-col space-y-5'>
					<Filter
						selectedBrand={selectedBrand}
						id={id as string}
						setSelectedBrand={setSelectedBrand}
					></Filter>
					<div className='grid lg:grid-cols-4 grid-cols-2'>
						{isPending ? (
							Array(10)
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
					<Pagination className='hidden lg:block'>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious href='#' />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href='#'>1</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href='#'>2</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationNext href='#' />
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			</div>
		</div>
	);
}
