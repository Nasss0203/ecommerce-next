"use client";
import { logout } from "@/api/auth.api";
import { breakpoints } from "@/constants";
import { useUser } from "@/hooks/useUser";
import { cn } from "@/lib/utils";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const HeaderAuth = () => {
	const { user, setUser } = useUser();

	const handleLogout = async () => {
		await logout();
		setUser(null);
	};

	return (
		<div
			className={cn(
				{},
				"flex items-center justify-between md:py-3 py-1 text-[#666] text-xs",
				`${breakpoints}`,
			)}
		>
			<div className='flex items-center gap-1 '>
				<CiLocationOn className='hidden md:bl' />
				<span className=''>Ho Chi Minh City</span>
			</div>
			<div className='flex items-center gap-2 '>
				<div className='md:flex items-center gap-4 hidden '>
					<div className='flex items-center gap-1'>
						<span>VIE</span>
						<IoIosArrowDown />
					</div>
					<div className='flex items-center gap-1'>
						<span>VND</span>
						<IoIosArrowDown />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderAuth;
