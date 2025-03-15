"use client";
import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Cart = () => {
	const [count, setCount] = useState<number>(0);
	return (
		<div>
			<div className='flex space-x-5'>
				<div className='w-[65%] flex flex-col space-y-5'>
					<div className='w-full self-start bg-white shadow-md rounded-lg p-4 border border-neutral-200'>
						<table className='w-full border-collapse'>
							<thead>
								<tr className='border-b'>
									<th className='text-left p-3'>Product</th>
									<th className='p-3'>Price</th>
									<th className='p-3'>Quantity</th>
									<th className='p-3'>Subtotal</th>
									<th className='p-3'></th>
								</tr>
							</thead>
							<tbody>
								{Array(3)
									.fill(0)
									.map((_, index) => (
										<tr className='border-b' key={index}>
											<td className='flex items-center gap-4 p-3'>
												<Image
													src='/Image.png'
													alt='Green Capsicum'
													className='w-12 h-12 object-cover rounded'
													width={48}
													height={48}
												/>
												Green Capsicum
											</td>
											<td className='text-center p-3'>
												$14.00
											</td>
											<td className='text-center p-3'>
												<div className='inline-flex items-center border border-gray-300 rounded-full px-2 py-1.5'>
													<button
														className='w-9 h-9 flex items-center justify-center text-gray-700 bg-gray-100 rounded-full cursor-pointer'
														type='button'
														onClick={() =>
															setCount(count - 1)
														}
													>
														<FaMinus />
													</button>
													<span className='px-3 w-12 text-center'>
														{count}
													</span>
													<button
														className='w-10 h-10 flex items-center justify-center text-gray-700 bg-gray-100 rounded-full  cursor-pointer'
														type='button'
														onClick={() =>
															setCount(count + 1)
														}
													>
														<FaPlus />
													</button>
												</div>
											</td>
											<td className='text-center p-3'>
												$70.00
											</td>
											<td className='text-center p-3'>
												<button className='text-red-500'>
													×
												</button>
											</td>
										</tr>
									))}
							</tbody>
						</table>
						<div className='flex justify-between items-center mt-4'>
							<button className='px-4 py-2 border rounded'>
								Return to shop
							</button>
							<button className='px-4 py-2 bg-gray-900 text-white rounded'>
								Update Cart
							</button>
						</div>
					</div>
					<div className='w-full self-start bg-white shadow-md rounded-lg p-4 border border-neutral-200'>
						<div className='flex items-center gap-2'>
							<h5 className='text-base font-medium text-[#1a1a1a]'>
								Coupon Code
							</h5>
							<div className='flex items-center flex-1'>
								<div className='border border-neutral-900 rounded-full flex-1 py-3 px-4'>
									<input
										type='text'
										name=''
										id=''
										className='w-full'
									/>
								</div>
								<button className='py-4 px-10 w-52 rounded-full bg-gray-900 text-sm text-white -ml-10'>
									Apply Coupon
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='w-[35%]'>
					<div className='w-full self-start bg-white shadow-md rounded-lg p-6 border border-neutral-200'>
						<h2 className='text-xl font-medium text-[#1a1a1a] mb-2'>
							Cart Total
						</h2>
						<div className='flex flex-col'>
							<div className='flex items-center justify-between py-3'>
								<span className='text-sm text-[#4D4D4D] '>
									Subtotal:
								</span>
								<span className='text-sm font-medium text-[#1a1a1a] '>
									$84.00
								</span>
							</div>
							<hr />
							<div className='flex items-center justify-between py-3'>
								<span className='text-sm text-[#4D4D4D] '>
									Shipping:
								</span>
								<span className='text-sm font-medium text-[#1a1a1a] '>
									Free
								</span>
							</div>
							<hr />
							<div className='flex items-center justify-between py-3'>
								<span className='text-base text-[#4D4D4D] '>
									Total:
								</span>
								<span className='text-2xl font-medium text-[#1a1a1a] '>
									$84.00
								</span>
							</div>
						</div>
						<button className='py-4 px-10 w-full rounded-full bg-[#616ff6] text-base text-white mt-5'>
							Proceed to checkout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
