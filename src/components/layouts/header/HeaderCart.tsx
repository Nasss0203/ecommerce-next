"use client";
import { DialogAuth } from "@/components/dialog";
import { breakpoints } from "@/constants";
import { useAddCart } from "@/hooks/useCart";
import { useUser } from "@/hooks/useUser";
import { ICart } from "@/types/cart.type";
import Image from "next/image";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
const HeaderCart = () => {
	const { dataListCart } = useAddCart();
	const { user } = useUser();
	const response: ICart = dataListCart?.data;
	const lengthCart = response?.cart_products?.length;

	return (
		<div
			className={`flex items-center justify-between py-5 ${breakpoints}`}
		>
			<Link href={"/"} className='flex items-center gap-1'>
				<Image
					src={"/sneat-logo.png"}
					alt=''
					width={30}
					height={30}
				></Image>
				<h1 className='text-2xl font-medium text-[#002603]'>
					E-commerce
				</h1>
			</Link>
			<div className='flex items-center '>
				<div className='flex items-center py-3 gap-2 px-4 border border-[#E5E5E5] border-r-0 rounded-l-md w-[400px]'>
					<span className='text-xl text-gray-400'>
						<IoSearchOutline />
					</span>
					<input
						type='text'
						className='w-full'
						placeholder='Tìm sản phẩm...'
					/>
				</div>
				<button className='px-6 py-[15px] rounded-r-md bg-[#616ff6] font-semibold text-white text-sm'>
					Tìm kiếm
				</button>
			</div>
			{user ? (
				<div className='flex items-center gap-3'>
					<div className='text-4xl'>
						<IoMdHeartEmpty />
					</div>
					<div className='border-r border-[#666] h-5'></div>
					<Link href={"/cart"} className='flex items-center gap-2 '>
						<div className='text-4xl relative'>
							<BsCart />
							<div className='absolute flex justify-center  top-0 left-0 -translate-y-1 translate-x-1/3'>
								<div className='w-6 h-6 text-[10px] text-center flex items-center justify-center text-white bg-red-500 rounded-full'>
									<span>
										{lengthCart > 0 ? lengthCart : 0}
									</span>
								</div>
							</div>
						</div>
					</Link>
				</div>
			) : (
				<DialogAuth>
					<div className='flex items-center gap-3 cursor-pointer'>
						<div className='text-4xl'>
							<IoMdHeartEmpty />
						</div>
						<div className='border-r border-[#666] h-5'></div>
						<div className='text-4xl relative'>
							<BsCart />
							<div className='absolute flex justify-center  top-0 left-0 -translate-y-1 translate-x-1/3'>
								<div className='w-6 h-6 text-[10px] text-center flex items-center justify-center text-white bg-red-500 rounded-full'>
									<span>0</span>
								</div>
							</div>
						</div>
					</div>
				</DialogAuth>
			)}
		</div>
	);
};

export default HeaderCart;
