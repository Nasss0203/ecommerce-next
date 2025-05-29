"use client";
import { findAllOrder } from "@/api/order.api";
import { convertDate } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const DashboardOrder = () => {
	const { data } = useQuery({
		queryKey: ["order"],
		queryFn: () => findAllOrder(),
	});

	const orderData = data?.data || [];
	console.log(" orderData~", orderData);

	return (
		<div className=''>
			<div className='p-4 border-b border-gray-200'>
				<h2 className='text-lg font-semibold'>Order History</h2>
			</div>
			<div className='overflow-x-auto'>
				<table className='w-full text-left'>
					<thead className='bg-gray-100 text-sm font-medium text-gray-700'>
						<tr>
							<th className='px-4 py-3'>ORDER ID</th>
							<th className='px-4 py-3'>DATE</th>
							<th className='px-4 py-3'>TOTAL</th>
							<th className='px-4 py-3'>STATUS</th>
							<th className='px-4 py-3' />
						</tr>
					</thead>
					<tbody className='text-sm text-gray-800'>
						{orderData?.map((items: any) => (
							<tr className='border-t' key={items._id}>
								<td className='px-4 py-3'>
									#{items.order_tracking.slice(-4)}
								</td>
								<td className='px-4 py-3'>
									{convertDate(items.createdAt)}
								</td>
								<td className='px-4 py-3 font-semibold'>
									{items.order_products
										.reduce(
											(sum: any, product: any) =>
												sum + product.totalPrice,
											0,
										)
										?.toLocaleString("vi-VN")}
									({items.order_products.length} sản phẩm)
								</td>
								<td className='px-4 py-3 text-yellow-600'>
									{items.order_status}
								</td>
								<td className='px-4 py-3 text-green-600 font-medium cursor-pointer hover:underline'>
									<Link href={`order/${items._id}`}>
										View Details
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className='flex items-center justify-center space-x-2 py-4 border-t text-sm'>
				<button className='w-8 h-8 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100'>
					&lt;
				</button>
				<button className='w-8 h-8 rounded-full bg-green-600 text-white font-semibold'>
					1
				</button>
				<button className='w-8 h-8 rounded-full hover:bg-gray-200'>
					2
				</button>
				<button className='w-8 h-8 rounded-full hover:bg-gray-200'>
					3
				</button>
				<button className='w-8 h-8 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100'>
					&gt;
				</button>
			</div>
		</div>
	);
};

export default DashboardOrder;
