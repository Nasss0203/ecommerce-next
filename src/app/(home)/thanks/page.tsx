"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const ThankPage = () => {
	const router = useRouter();
	return (
		<div className=' flex items-center justify-center p-6  '>
			<div className='bg-white rounded-2xl shadow-xl p-10 max-w-md text-center border border-neutral-200'>
				<CheckCircle className='text-green-500 w-16 h-16 mx-auto mb-6' />
				<h1 className='text-2xl font-bold text-gray-800 mb-4'>
					Đặt hàng thành công!
				</h1>
				<p className='text-gray-600 mb-6'>
					Cảm ơn bạn đã mua hàng tại <strong>TenShop</strong>. Đơn
					hàng của bạn đang được xử lý và sẽ sớm được giao đến bạn.
				</p>
				<div className='flex flex-col gap-3'>
					<Button
						onClick={() => router.push("/dashboard/order")}
						className='w-full'
					>
						Xem đơn hàng
					</Button>
					<Button
						onClick={() => router.push("/")}
						variant='outline'
						className='w-full'
					>
						Tiếp tục mua sắm
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ThankPage;
