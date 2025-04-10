"use client";
import { getDetailProduct } from "@/api/product.api";
import { RelatedProduct, TabProduct } from "@/components/product";
import { SlideDetail } from "@/components/slide";
import { Rating } from "@/components/vote";
import { breakpoints } from "@/constants";
import { useHandleAddToCart } from "@/hooks/useHandleAddCart";
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
	const [count, setCount] = useState<number>(1);
	const { handleAddToCart } = useHandleAddToCart();
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

	const addCart = () => {
		handleAddToCart({
			productId: items?._id as string,
			quantity: count,
			name: items?.product_name as string,
			image: items?.product_thumb as string,
			price: items?.product_price,
		});
	};

	return (
		<div className={`${breakpoints} flex flex-col gap-10`}>
			<div className='grid-cols-12 gap-5 grid'>
				<div className='col-span-7'>
					<div className='flex items-center gap-2'>
						<div className='w-full h-auto'>
							{items?.product_images &&
							items.product_images.length > 0 ? (
								<SlideDetail images={items.product_images} />
							) : (
								<div className='w-full h-[400px] flex justify-center items-center border border-neutral-200 rounded-lg py-3'>
									<Image
										src={items?.product_thumb || ""}
										alt={items?.product_name || ""}
										width={600}
										height={400}
										className='object-contain max-w-full h-auto max-h-full'
									/>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='col-span-5'>
					<div className='flex gap-1 text-xl items-center'>
						{items?.product_name}
						<span className='px-2 py-1 inline-flex rounded-sm bg-green-300 text-green-700 text-xs font-normal'>
							In Stock
						</span>
					</div>
					<div className='flex flex-col gap-5'>
						<div className='flex items-center gap-1'>
							<Rating
								star={items?.product_ratingAverage as number}
							></Rating>
							<LuDot />
							<div className='text-sm flex items-center gap-1'>
								<span className='text-[#333] font-medium'>
									SKU:
								</span>
								<span className='text-[#666]'>2,51,594</span>
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
							<div className='flex flex-col gap-1'>
								<div className=' flex items-center gap-1'>
									<span className='text-[#1A1A1A] text-sm'>
										Brand:
									</span>
									<span className='text-[#808080] text-sm'>
										{items?.product_brand?.brand_name && (
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
								</div>
								<div className=' flex items-center gap-1'>
									<span className='text-[#1a1a1a] text-sm'>
										Category:
									</span>
									<span className='text-[#808080] text-sm'>
										{items?.product_category
											?.category_name && (
											<>
												{items?.product_category?.category_name
													.charAt(0)
													.toUpperCase()}
												{items?.product_category?.category_name.slice(
													1,
												)}
											</>
										)}
									</span>
								</div>
							</div>
							<p className='line-clamp-3 text-[#808080] text-sm'>
								Class aptent taciti sociosqu ad litora torquent
								per conubia nostra, per inceptos himenaeos.
								Nulla nibh diam, blandit vel consequat nec,
								ultrices et ipsum. Nulla varius magna a
								consequat pulvinar.
							</p>
						</div>
						<div className='flex items-center gap-4 pb-5 border-b border-[#E5E5E5]'>
							<div className='flex items-center border border-gray-300 rounded-full px-2 py-1.5'>
								<button
									className='w-9 h-9 flex items-center justify-center text-gray-700 bg-gray-100 rounded-full cursor-pointer'
									type='button'
									onClick={() =>
										setCount((prev) =>
											Math.max(1, prev - 1),
										)
									}
								>
									<FaMinus />
								</button>
								<span className='px-3 w-12 text-center'>
									{count}
								</span>
								<button
									className='w-10 h-10 flex items-center justify-center text-gray-700 bg-gray-100 rounded-full  cursor-pointer'
									type='button'
									onClick={() => setCount((prev) => prev + 1)}
								>
									<FaPlus />
								</button>
							</div>
							<button
								className='bg-[#616ff6] flex-1 text-white font-medium rounded-full px-10 py-4 flex justify-center items-center gap-2  transition-colors'
								type='button'
								onClick={addCart}
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
					</div>
				</div>
			</div>
			<TabProduct description={items?.product_description} />

			<RelatedProduct></RelatedProduct>
		</div>
	);
};

export default Details;
