"use client";
import { getDetailProduct } from "@/api/product.api";
import { RelatedProduct, TabProduct } from "@/components/product";
import { Rating } from "@/components/vote";
import { breakpoints } from "@/constants";
import { IData } from "@/types";
import { IProduct } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { BsBag } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuDot } from "react-icons/lu";

const Details = () => {
	const [count, setCount] = useState<number>(0);
	const { id } = useParams();

	const { data, isPending, error } = useQuery({
		queryKey: ["product", id],
		queryFn: () =>
			id ? getDetailProduct(id as string) : Promise.resolve(null),
		enabled: !!id,
	});

	if (isPending) return <div>Loading...</div>;
	if (error) return <div>Error loading product</div>;

	const itemsProduct: IData<IProduct> | null = data;
	const items = itemsProduct?.data;
	console.log(" items~", items);
	return (
		<div>
			<div className={`${breakpoints} flex flex-col gap-6`}>
				<div className='flex gap-6 justify-between'>
					<div className='flex items-center gap-2'>
						<div></div>
						<div className='w-[400px] h-[400px]'>
							<Image
								src={items?.product_thumb || ""}
								alt={items?.product_name || ""}
								width={600}
								height={600}
								className='object-cover w-full h-full'
							></Image>
						</div>
					</div>
					<div>
						<div className='flex gap-1 text-xl items-center'>
							{items?.product_name}
							<span className='px-2 py-1 inline-flex rounded-sm bg-green-300 text-green-700 text-xs font-normal'>
								In Stock
							</span>
						</div>
						<div className='flex flex-col gap-5'>
							<div className='flex items-center gap-1'>
								<Rating
									star={
										items?.product_ratingAverage as number
									}
								></Rating>
								<LuDot />
								<div className='text-sm flex items-center gap-1'>
									<span className='text-[#333] font-medium'>
										SKU:
									</span>
									<span className='text-[#666]'>
										2,51,594
									</span>
								</div>
							</div>
							<div className='items-center flex gap-3 pb-5 border-b border-[#E5E5E5]'>
								<div className='flex items-center gap-1'>
									<span className='text-[#B3B3B3] line-through text-xl font-normal'>
										{(
											items?.product_price + 5000000
										).toLocaleString("vi-VN")}
									</span>
									<span className='text-[#2C742F] line-clamp-none text-2xl'>
										{items?.product_price.toLocaleString(
											"vi-VN",
										)}
									</span>
								</div>
								<div className='px-2.5 py-2 rounded-full bg-red-100 text-red-500 text-xs'>
									64% Off
								</div>
							</div>
							<div className='space-y-3 pb-5 border-b border-[#E5E5E5]'>
								<div className=''>
									<div className='flex items-center'>
										<span className='text-[#1A1A1A] text-sm'>
											Brand:{" "}
											{items?.product_brand
												?.brand_name && (
												<>
													{items.product_brand.brand_name
														.charAt(0)
														.toUpperCase()}
													{items.product_brand.brand_name.slice(
														1,
													)}
												</>
											)}
										</span>
										<span></span>
									</div>
								</div>
								<p className='line-clamp-3 text-[#808080] text-sm'>
									Class aptent taciti sociosqu ad litora
									torquent per conubia nostra, per inceptos
									himenaeos. Nulla nibh diam, blandit vel
									consequat nec, ultrices et ipsum. Nulla
									varius magna a consequat pulvinar.
								</p>
							</div>
							<div className='flex items-center gap-4 pb-5 border-b border-[#E5E5E5]'>
								<div className='flex items-center border border-gray-300 rounded-full px-2 py-1.5'>
									<button
										className='w-9 h-9 flex items-center justify-center text-gray-700 bg-gray-100 rounded-full cursor-pointer'
										type='button'
										onClick={() => setCount(count - 1)}
									>
										<FaMinus />
									</button>
									<span className='px-3 w-12 text-center'>
										{count}
									</span>
									<button
										className='w-10 h-10 flex items-center justify-center text-gray-700 bg-gray-100 rounded-full  cursor-pointer'
										type='button'
										onClick={() => setCount(count + 1)}
									>
										<FaPlus />
									</button>
								</div>
								<button
									className='bg-[#616ff6] flex-1 text-white font-medium rounded-full px-10 py-4 flex justify-center items-center gap-2  transition-colors'
									type='button'
								>
									Add to Cart
									<span className='text-xl'>
										<BsBag />
									</span>
								</button>
								<div className='w-12 h-12 text-2xl  rounded-full bg-blue-100  flex items-center justify-center text-[#616ff6]'>
									<IoMdHeartEmpty />
								</div>
							</div>
							<div className='flex flex-col gap-2'>
								<div className=' flex items-center gap-1'>
									<span className='text-[#1a1a1a] text-sm'>
										Category:
									</span>
									<span className='text-[#808080] text-sm'>
										Vegetables
									</span>
								</div>
								<div className=' flex items-center gap-1'>
									<span className='text-[#1a1a1a] text-sm'>
										Tag:
									</span>
									<div className='text-[#808080] text-sm'>
										<span>Vegetables, Healthy</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<TabProduct></TabProduct>
				<RelatedProduct></RelatedProduct>
			</div>
		</div>
	);
};

export default Details;
