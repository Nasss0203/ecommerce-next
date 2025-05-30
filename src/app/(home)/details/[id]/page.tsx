"use client";
import { getDetailProduct } from "@/api/product.api";
import { DialogAuth } from "@/components/dialog";
import { RelatedProduct } from "@/components/product";
import { ProductDetailsSkeleton } from "@/components/skeleton";
import { SlideDetail } from "@/components/slide";
import { TabProduct } from "@/components/tab";
import { Rating } from "@/components/vote";
import { useHandleAddToCart } from "@/hooks/useHandleAddCart";
import { useUser } from "@/hooks/useUser";
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
	const { user } = useUser();
	const { handleAddToCart } = useHandleAddToCart();
	const { id } = useParams();

	const { data, isPending } = useQuery({
		queryKey: ["product", id],
		queryFn: () =>
			id ? getDetailProduct(id as string) : Promise.resolve(null),
		enabled: !!id,
	});

	if (isPending) return <ProductDetailsSkeleton></ProductDetailsSkeleton>;

	const itemsProduct: IData<IProduct> | null = data;
	const items = itemsProduct?.data;

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
		<div className={`flex flex-col gap-10`}>
			<div className='lg:grid-cols-12 gap-5 lg:grid flex flex-col '>
				<div className='lg:col-span-7'>
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
				<div className='lg:col-span-5'>
					<div className='flex gap-1 text-xl items-center line-clamp-2'>
						{items?.product_name}
					</div>
					<div className='flex flex-col gap-5'>
						<div className='flex items-center gap-1'>
							<Rating
								star={items?.product_ratingAverage as number}
							></Rating>
							<LuDot />
							<div className='text-sm flex items-center gap-1'>
								<span className='text-[#333] font-medium text-xs lg:text-sm'>
									SKU:
								</span>
								<span className='text-[#666] text-xs lg:text-sm'>
									2,51,594
								</span>
							</div>
							<LuDot />
							<span className='px-2 py-1 inline-flex rounded-sm bg-green-300 text-green-700 text-xs font-normal'>
								In Stock
							</span>
						</div>
						<div className='items-center flex gap-3 md:pb-5 pb-3 border-b border-[#E5E5E5]'>
							<div className='flex items-center gap-1'>
								<span className='text-[#B3B3B3] line-through lg:text-xl font-normal text-sm'>
									{(
										items?.product_price + 5000000
									).toLocaleString("vi-VN")}
								</span>
								<span className='text-[#2C742F] line-clamp-none lg:text-2xl text-base'>
									{items?.product_price.toLocaleString(
										"vi-VN",
									)}
								</span>
							</div>
							<div className='px-2.5 py-2 rounded-full bg-red-100 text-red-500 lg:text-xs text-[10px]'>
								64% Off
							</div>
						</div>
						<div className='space-y-3 md:pb-5 pb-3 border-b border-[#E5E5E5]'>
							<div className='flex flex-col gap-1'>
								<div className=' flex items-center gap-1'>
									<span className='text-[#1A1A1A] text-sm'>
										Hãng:
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
										Danh mục:
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
						</div>
						<div className='flex items-center gap-4 pb-5 border-b border-[#E5E5E5] '>
							<div className='flex items-center border justify-between border-gray-300 rounded-full px-2 py-1.5 flex-1 lg:flex-none'>
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

							{user ? (
								<button
									className='bg-[#616ff6] lg:flex-1 text-white font-medium rounded-full lg:px-10 lg:py-4 p-4 flex justify-center items-center gap-2  transition-colors'
									type='button'
									onClick={addCart}
								>
									<span className='hidden lg:block'>
										Thêm vào giỏ hàng
									</span>
									<span className='text-xl'>
										<BsBag />
									</span>
								</button>
							) : (
								<DialogAuth>
									<button
										className='bg-[#616ff6] flex-1 text-white font-medium rounded-full px-10 py-4 flex justify-center items-center gap-2  transition-colors'
										type='button'
									>
										Thêm vào giỏ hàng
										<span className='text-xl'>
											<BsBag />
										</span>
									</button>
								</DialogAuth>
							)}

							<div className='w-12 h-12 text-2xl  rounded-full bg-blue-100  lg:flex items-center justify-center text-[#616ff6] hidden '>
								<IoMdHeartEmpty />
							</div>
						</div>
					</div>
				</div>
			</div>
			<TabProduct
				description={items?.product_description}
				title={items?.product_name}
			/>
			<RelatedProduct
				category={items?.product_category?._id}
				brand={items?.product_brand?._id}
				currentId={items?._id}
			></RelatedProduct>
		</div>
	);
};

export default Details;
