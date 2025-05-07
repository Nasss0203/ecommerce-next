import Link from "next/link";
import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";

const DialogAuth = ({ children }: { children: React.ReactNode }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className='w-[400px]'>
				<DialogHeader>
					<DialogTitle className='text-center'>
						Vui lòng đăng nhập
					</DialogTitle>
					<DialogDescription className='space-y-3 mt-2 text-sm text-gray-600'>
						<p className='text-center'>
							Chưa có tài khoản?{" "}
							<Link
								href='/sign-up'
								className='text-blue-600 hover:underline font-medium'
							>
								Đăng ký ngay
							</Link>{" "}
						</p>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default DialogAuth;
