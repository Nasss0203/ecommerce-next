"use client";

import { findOneOrder } from "@/api/order.api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";

const DetailsOrder = () => {
	const params = useParams();
	const orderId = params.id as string;

	const { data, isPending, isError } = useQuery({
		queryKey: ["order", orderId],
		queryFn: () => findOneOrder(orderId),
		enabled: !!orderId,
	});

	if (isPending) return <div>Đang tải đơn hàng...</div>;
	if (isError || !data?.data)
		return <div>Không thể tải dữ liệu đơn hàng.</div>;

	const order = data.data;

	return (
		<div className='p-6 space-y-6'>
			<h2 className='text-2xl font-bold'>Chi tiết đơn hàng</h2>

			{/* Thông tin cơ bản */}
			<div className='bg-gray-100 p-4 rounded-md space-y-1'>
				<p>
					<strong>Mã đơn:</strong> {order.order_tracking}
				</p>
				<p>
					<strong>Trạng thái thanh toán:</strong>{" "}
					{order.order_payment}
				</p>
				<p>
					<strong>Trạng thái đơn hàng:</strong> {order.order_status}
				</p>
				<p>
					<strong>Ngày đặt:</strong>{" "}
					{new Date(order.createdAt).toLocaleString("vi-VN")}
				</p>
			</div>

			{/* Địa chỉ giao hàng */}
			<div className='bg-gray-100 p-4 rounded-md'>
				<h3 className='font-semibold mb-2'>Địa chỉ giao hàng:</h3>
				<p>
					{order.order_shipping.street}, {order.order_shipping.ward},{" "}
					{order.order_shipping.district}, {order.order_shipping.city}
				</p>
			</div>

			{/* Sản phẩm */}
			<div className='bg-gray-100 p-4 rounded-md'>
				<h3 className='font-semibold mb-4'>Sản phẩm đã đặt:</h3>

				{order.order_products.map((item: any, idx: number) => (
					<div
						key={idx}
						className='flex gap-4 items-center border-b py-4'
					>
						<Image
							height={96}
							width={96}
							src={item.image}
							alt={item.name}
							className='w-24 h-24 object-cover rounded-md border'
						/>
						<div className='flex-1 space-y-1'>
							<p className='font-semibold'>{item.name}</p>
							<p>Số lượng: {item.quantity}</p>
							<p>Giá: {item.price.toLocaleString("vi-VN")}đ</p>
							<p className='font-medium'>
								Tổng:{" "}
								{(item.quantity * item.price).toLocaleString(
									"vi-VN",
								)}
								đ
							</p>
						</div>
					</div>
				))}
			</div>

			{/* Tổng đơn */}
			<div className='text-right text-lg font-bold'>
				Tổng cộng:{" "}
				{order.order_checkout?.grandTotal?.toLocaleString("vi-VN")}đ
			</div>
		</div>
	);
};

export default DetailsOrder;
