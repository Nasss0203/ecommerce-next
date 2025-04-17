"use client";
import { logout } from "@/api/auth.api";
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
import { useUser } from "@/hooks/useUser";
import { cn } from "@/lib/utils";
import { BadgeCheck, Bell, CreditCard, LogOut, Sparkles } from "lucide-react";
import Link from "next/link";
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
						<span>VIE</span>
						<IoIosArrowDown />
					</div>
					<div className='flex items-center gap-1'>
						<span>VND</span>
						<IoIosArrowDown />
					</div>
				</div>
				<div className='border-r border-[#666] h-4'></div>
				{user ? (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm cursor-pointer'>
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
								<DropdownMenuItem>
									<Sparkles />
									Upgrade to Pro
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<BadgeCheck />
									Account
								</DropdownMenuItem>
								<DropdownMenuItem>
									<CreditCard />
									Billing
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Bell />
									Notifications
								</DropdownMenuItem>
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

export default HeaderAuth;
