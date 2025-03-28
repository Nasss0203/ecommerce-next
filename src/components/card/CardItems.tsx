"use client";
import { ICardItems } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { GoStarFill } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { DialogProduct } from "../product";

const CardItems = (props: ICardItems) => {
	const {
		image,
		category,
		title,
		price,
		price_discount,
		rate,
		sale,
		_id,
		brand,
	} = props;

	return (
		<div className='relative group  flex flex-col h-full'>
			<Link
				href={`${category}/${brand}/${_id}`}
				className='p-[5px] border border-[#E5E5E5] flex flex-col transition delay-150 duration-300 ease-in-out hover:shadow-lg'
			>
				<div className='w-full h-full py-5 bg-white flex items-center justify-center'>
					<div className='h-[250px] w-[250px] bg-white'>
						<Image
							src={image}
							alt={"title as string"}
							width={254}
							height={230}
							className='object-cover shrink w-full h-full'
						></Image>
					</div>
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
					<DialogProduct
						image={image}
						price={price}
						price_discount={price}
						rate={rate}
						title={title}
						brand={brand}
					></DialogProduct>
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

export default CardItems;
