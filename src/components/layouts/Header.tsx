import { breakpoints } from "@/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosArrowDown, IoMdHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
const menuItems: {
	title: string;
	icon?: React.ReactElement;
	href: string;
}[] = [
	{
		title: "Category",
		icon: <IoIosArrowDown />,
		href: "/category",
	},
];
const Header = () => {
	return (
		<header className='flex flex-col'>
			<div
				className={cn(
					{},
					"flex items-center justify-between py-3 text-[#666] text-xs",
					`${breakpoints}`,
				)}
			>
				<div className='flex items-center gap-1 '>
					<CiLocationOn />
					<span className=''>Ho Chi Minh City</span>
				</div>
				<div className='flex items-center gap-2'>
					<div className='flex items-center gap-4 '>
						<div className='flex items-center gap-1'>
							<span>ENG</span>
							<IoIosArrowDown />
						</div>
						<div className='flex items-center gap-1'>
							<span>USD</span>
							<IoIosArrowDown />
						</div>
					</div>
					<div className='border-r border-[#666] h-4'></div>
					<div className='flex items-center gap-1'>
						<Link href={"/sign-in"}>Sign in</Link>
						<span>/</span>
						<Link href={"/sign-up"}>Sign up</Link>
					</div>
				</div>
			</div>
			<hr />
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
							placeholder='Search...'
						/>
					</div>
					<button className='px-6 py-[15px] rounded-r-md bg-[#616ff6] font-semibold text-white text-sm'>
						Search
					</button>
				</div>
				<div className='flex items-center gap-3'>
					<div className='text-3xl'>
						<IoMdHeartEmpty />
					</div>
					<div className='border-r border-[#666] h-5'></div>
					<div className='flex items-center gap-2'>
						<div className='text-2xl'>
							<BsCart />
						</div>
						<div className='flex flex-col'>
							<span className='text-xs text-[#4D4D4D] font-normal'>
								Shopping cart:
							</span>
							<span className='text-sm font-medium text-[#1A1A1A]'>
								$57.00
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full py-4 bg-[#333]'>
				<div
					className={`${breakpoints} flex items-center justify-between`}
				>
					<ul className='flex items-center gap-8'>
						{menuItems.map((item, index) => (
							<li key={index}>
								<Link
									href={item.href}
									className='text-white font-medium text-sm flex items-center gap-1'
								>
									{item.title}
									<span>{item.icon}</span>
								</Link>
							</li>
						))}
					</ul>
					<div className='flex items-center gap-2 text-white font-medium text-sm'>
						<span className='text-xl'>
							<FiPhoneCall />
						</span>
						<span>(219) 555-0114</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
