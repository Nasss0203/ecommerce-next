"use client";
import { logout } from "@/api/auth.api";
import { searchProduct } from "@/api/product.api";
import { DialogAuth } from "@/components/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { breakpoints } from "@/constants";
import { useAddCart } from "@/hooks/useCart";
import { useUser } from "@/hooks/useUser";
import { ICart } from "@/types/cart.type";
import { BadgeCheck, ListOrdered, LogOut, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
const HeaderCart = () => {
	const { dataListCart } = useAddCart();
	const { user, setUser } = useUser();
	const [searchKey, setSearchKey] = useState<string>("");
	const [searchResults, setSearchResults] = useState([]);
	const [isSearching, setIsSearching] = useState<boolean>(false);

	const handleLogout = async () => {
		await logout();
		setUser(null);
	};
	useEffect(() => {
		const delayDebounceFn = setTimeout(async () => {
			if (searchKey.trim()) {
				setIsSearching(true);
				try {
					const results = await searchProduct(searchKey);
					setSearchResults(results.data); // Lưu kết quả tìm kiếm
				} catch (error) {
					console.error("Error searching products:", error);
				} finally {
					setIsSearching(false);
				}
			} else {
				setSearchResults([]); // Xóa kết quả nếu ô tìm kiếm rỗng
			}
		}, 300);

		return () => clearTimeout(delayDebounceFn);
	}, [searchKey]);

	const response: ICart = dataListCart?.data;
	const lengthCart = response?.cart_products?.length;

	return (
		<div
			className={`flex items-center justify-between md:py-5 py-2  ${breakpoints}`}
		>
			<Link href={"/"} className='flex items-center gap-1'>
				<Image
					src={"/sneat-logo.png"}
					alt=''
					width={30}
					height={30}
					className='md:w-[30px] md:h-[30px] w-[25px] h-[25px]'
				></Image>
				<h1 className='text-2xl font-medium text-[#002603] hidden md:block'>
					E-commerce
				</h1>
			</Link>
			<>
				<div className='md:flex items-center hidden'>
					<div className='flex items-center py-3 gap-2 px-4 border border-[#E5E5E5] rounded-md w-[400px] relative'>
						<span className='text-xl text-gray-400'>
							<IoSearchOutline />
						</span>
						<input
							type='text'
							className='w-full'
							placeholder='Tìm sản phẩm...'
							value={searchKey}
							onChange={(e) => setSearchKey(e.target.value)} // Cập nhật từ khóa
						/>
						{isSearching && (
							<div className='absolute top-full left-0 w-full bg-white shadow-md p-2'>
								Đang tìm kiếm...
							</div>
						)}
						{searchResults.length > 0 && (
							<div className='absolute top-full left-0 w-full bg-white shadow-md p-2'>
								{searchResults
									.slice(0, 5)
									?.map((result: any) => (
										<div
											key={result._id}
											className='flex items-center gap-3 p-2 hover:bg-gray-100'
										>
											<img
												src={result.product_thumb}
												alt={result.product_name}
												className='w-12 h-12 object-cover rounded'
											/>
											<div className='flex flex-col'>
												<span className='font-medium text-sm'>
													{result.product_name}
												</span>
												<span className='text-red-500 text-sm font-semibold'>
													{result.product_price?.toLocaleString(
														"vi-VN",
													)}
													₫
												</span>
											</div>
										</div>
									))}
							</div>
						)}
					</div>
				</div>
			</>
			<div className='flex items-center gap-2'>
				{user ? (
					<div className='flex items-center gap-2'>
						<Link
							href={"/cart"}
							className='flex items-center gap-2 '
						>
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
				<div className='border-r border-[#666] h-4 md:block hidden'></div>
				{user ? (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm cursor-pointer'>
								<Avatar className='w-8 h-8 rounded-lg'>
									<AvatarImage src={""} alt={""} />
									<AvatarFallback className='rounded-full'>
										CN
									</AvatarFallback>
								</Avatar>
							</div>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
							side={"bottom"}
							align='end'
							sideOffset={4}
						>
							<DropdownMenuLabel className='p-0 font-normal'>
								<div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
									<Avatar className='w-8 h-8 rounded-lg'>
										<AvatarImage src={""} alt={""} />
										<AvatarFallback className='rounded-lg'>
											CN
										</AvatarFallback>
									</Avatar>
									<span className='font-semibold truncate text-sm leading-tight text-left'>
										{user.username}
									</span>
								</div>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />

							<DropdownMenuGroup>
								<Link href={"/dashboard/user"} className=''>
									<DropdownMenuItem>
										<BadgeCheck />
										Account
									</DropdownMenuItem>
								</Link>

								<Link href={"/dashboard/order"} className=''>
									<DropdownMenuItem>
										<ListOrdered />
										Orders
									</DropdownMenuItem>
								</Link>
								<Link href={"/dashboard/settings"} className=''>
									<DropdownMenuItem>
										<Settings />
										Settings
									</DropdownMenuItem>
								</Link>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuItem onClick={handleLogout}>
								<LogOut />
								Log out
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				) : (
					<div className='flex items-center gap-1'>
						<Link href={"/sign-in"}>Đăng nhập</Link>
						<span>/</span>
						<Link href={"/sign-up"}>Đăng ký</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default HeaderCart;
