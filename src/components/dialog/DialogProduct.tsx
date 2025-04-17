import { useHandleAddToCart } from "@/hooks/useHandleAddCart";
import { useUser } from "@/hooks/useUser";
import { ICardItems } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { BsBag } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { Rating } from "../vote";
import DialogAuth from "./DialogAuth";

const DialogProduct = (props: ICardItems) => {
	const { image, title, price, price_discount, rate, brand, _id, category } =
		props;
	const [count, setCount] = useState<number>(0);
	const { handleAddToCart } = useHandleAddToCart();
	const { user } = useUser();

	const addCart = () => {
		handleAddToCart({
			productId: _id as string,
			image,
			name: title,
			price: price,
			quantity: 1,
		});
	};
	return (
		<Dialog>
			<DialogTrigger className='cursor-pointer'>
				<div className='w-10 h-10 bg-[#fff] border border-[#E5E5E5] text-xl text-neutral-500 rounded-full flex justify-center items-center'>
					<MdOutlineRemoveRedEye />
				</div>
			</DialogTrigger>
			<DialogContent className='flex gap-6 w-[1000px]'>
				<div className='w-[500px] '>
					<Image
						src={image}
						alt={title as string}
						width={600}
						height={600}
						className='object-contain w-full h-full'
					></Image>
				</div>
				<DialogHeader>
					<DialogTitle className='flex gap-1 text-xl items-center'>
						{title}
					</DialogTitle>
					<div className='flex flex-col gap-5 w-[500px]'>
						<div className='flex items-center gap-1'>
							<div className='flex items-center gap-1'>
								<div className='items-center flex gap-0.5'>
									<Rating star={rate as number}></Rating>
								</div>
								<span className='text-sm text-[#666]'>
									4.93
								</span>
							</div>
							<LuDot />
							<div className='text-sm flex items-center gap-1'>
								<span className='text-[#333] font-medium'>
									SKU:
								</span>
								<span className='text-[#666]'>2,51,594</span>
							</div>
							<LuDot />
							<span className='px-2 py-1 inline-flex rounded-sm bg-green-300 text-green-700 text-xs font-normal'>
								In Stock
							</span>
						</div>
						<div className='items-center flex gap-3 pb-5 border-b border-[#E5E5E5]'>
							<div className='flex items-center gap-1'>
								<span className='text-[#B3B3B3] line-through text-xl font-normal'>
									{price?.toLocaleString("vi-VN")}
								</span>
								<span className='text-[#2C742F] line-clamp-none text-2xl'>
									{price_discount?.toLocaleString("vi-VN")}
								</span>
							</div>
							<div className='px-2.5 py-2 rounded-full bg-red-100 text-red-500 text-xs'>
								64% Off
							</div>
						</div>
						<div className='space-y-3 pb-5 border-b border-[#E5E5E5]'>
							<div className=''>
								<div className='flex items-center gap-1'>
									<span className='text-[#1A1A1A] text-sm'>
										Brand:
									</span>
									<span className='text-[#808080] text-sm'>
										{brand && (
											<>
												{brand.charAt(0).toUpperCase()}
												{brand.slice(1)}
											</>
										)}
									</span>
								</div>
								<div className=' flex items-center gap-1'>
									<span className='text-[#1a1a1a] text-sm'>
										Category:
									</span>
									<span className='text-[#808080] text-sm'>
										{category && (
											<>
												{category
													.charAt(0)
													.toUpperCase()}
												{category.slice(1)}
											</>
										)}
									</span>
								</div>
							</div>
							<DialogDescription className='line-clamp-3 text-[#808080] text-sm'>
								Class aptent taciti sociosqu ad litora torquent
								per conubia nostra, per inceptos himenaeos.
								Nulla nibh diam, blandit vel consequat nec,
								ultrices et ipsum. Nulla varius magna a
								consequat pulvinar.
							</DialogDescription>
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
							{user ? (
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
							) : (
								<DialogAuth>
									<button
										className='bg-[#616ff6] flex-1 text-white font-medium rounded-full px-10 py-4 flex justify-center items-center gap-2  transition-colors'
										type='button'
									>
										Add to Cart
										<span className='text-xl'>
											<BsBag />
										</span>
									</button>
								</DialogAuth>
							)}
							<div className='w-12 h-12 text-2xl  rounded-full bg-blue-100  flex items-center justify-center text-[#616ff6]'>
								<IoMdHeartEmpty />
							</div>
						</div>
						<div className='flex flex-col gap-2'>
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
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
export default DialogProduct;
