"use client";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { BsBag } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { MdOutlineRemoveRedEye, MdOutlineStarPurple500 } from "react-icons/md";

interface ICardItems {
	_id: string;
	path?: string;
	image: string;
	title?: string;
	price?: number;
	price_discount?: number;
	rate?: number;
	sale?: number;
}

const CardItems = (props: ICardItems) => {
	const { image, path, title, price, price_discount, rate, sale, _id } =
		props;
	const params = useParams(); // useParams() chỉ chạy được trong Client Component

	return (
		<div className='relative group  flex flex-col h-full'>
			<Link
				href={`/details/${_id}`}
				className='p-[5px] border border-[#E5E5E5] flex flex-col transition delay-150 duration-300 ease-in-out hover:shadow-lg pt-4'
			>
				<div className='h-[254px] w-[254px]'>
					<Image
						src={image}
						alt={"title as string"}
						width={254}
						height={230}
						className='object-cover shrink w-full h-full'
					></Image>
				</div>
				<div className='p-3 flex justify-between items-center'>
					<div className='flex flex-col gap-y-1'>
						<span className='text-[#4D4D4D] text-base font-semibold line-clamp-1'>
							{title}
						</span>
						<div className='flex flex-col text-base font-medium'>
							<span className='text-red-500'>
								{price?.toLocaleString("vi-VN")}
							</span>
							<span className='text-[#999] line-through text-sm'>
								{price_discount?.toLocaleString("vi-VN")}
							</span>
						</div>
						<div className='flex items-center gap-1 text-xs'>
							<span className='text-yellow-500'>
								<GoStarFill />
							</span>
							<span>{rate}</span>
						</div>
					</div>
				</div>
			</Link>
			<div className='absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity delay-0 duration-500 ease-in-out'>
				<div className='flex flex-col gap-1'>
					<div className='w-10 h-10 bg-[#fff] border border-[#E5E5E5] text-xl text-neutral-500 rounded-full flex justify-center items-center cursor-pointer'>
						<IoMdHeartEmpty />
					</div>
					<DialogProduct></DialogProduct>
				</div>
			</div>
			<div className='right-0 bottom-0 p-4 absolute'>
				<div className='flex justify-around items-center w-10 h-10 bg-[#F2F2F2] rounded-full cursor-pointer'>
					<IoBagOutline />
				</div>
			</div>
			{sale ? (
				<div
					className='absolute left-0 top-0 p-3
			'
				>
					<div className='px-2 py-1 rounded-md bg-red-500 text-xs font-medium text-white'>
						Sale 50%
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

function DialogProduct() {
	const [count, setCount] = useState<number>(0);
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
						src={"/image2.png"}
						alt=''
						width={600}
						height={600}
						className='object-cover w-full h-full'
					></Image>
				</div>
				<DialogHeader>
					<DialogTitle className='flex gap-1 text-xl items-center'>
						Chinese Cabbage
						<span className='px-2 py-1 inline-flex rounded-sm bg-green-300 text-green-700 text-xs font-normal'>
							In Stock
						</span>
					</DialogTitle>
					<div className='flex flex-col gap-5 w-[500px]'>
						<div className='flex items-center gap-1'>
							<div className='flex items-center gap-1'>
								<div className='items-center flex gap-0.5'>
									{Array(5)
										.fill(0)
										.map((_, index) => (
											<MdOutlineStarPurple500
												key={index}
												className='text-yellow-500'
											/>
										))}
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
						</div>
						<div className='items-center flex gap-3 pb-5 border-b border-[#E5E5E5]'>
							<div className='flex items-center gap-1'>
								<span className='text-[#B3B3B3] line-through text-xl font-normal'>
									$48.00
								</span>
								<span className='text-[#2C742F] line-clamp-none text-2xl'>
									$17.28
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
										Brand:
									</span>
									<span></span>
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
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

export default CardItems;
