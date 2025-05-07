"use client";
import { reviewCheckout } from "@/api/checkout.api";
import { useAddCart } from "@/hooks/useCart";
import { useUser } from "@/hooks/useUser";
import { ICart } from "@/types/cart.type";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

const Cart = () => {
	const router = useRouter();
	const { updateCartItem, dataListCart, removeFromCart } = useAddCart();
	const [quantities, setQuantities] = useState<Record<string, number>>({});
	const { user } = useUser();

	const response: ICart = dataListCart?.data;
	console.log(" response~", response);

	useEffect(() => {
		if (response?.cart_products) {
			const initialQuantities = response.cart_products.reduce(
				(acc, item) => {
					acc[item.productId] = item.quantity;
					return acc;
				},
				{} as Record<string, number>,
			);
			setQuantities(initialQuantities);
		}
	}, [response]);

	const handleUpdateQuantity = (productId: string, newQuantity: number) => {
		if (newQuantity < 1) return;

		const currentProduct = response?.cart_products.find(
			(item) => item.productId === productId,
		);
		if (!currentProduct) return;

		setQuantities((prev) => ({
			...prev,
			[productId]: newQuantity,
		}));

		updateCartItem({
			userId: user._id,
			item_products: [
				{
					old_quantity: currentProduct.quantity,
					price: currentProduct.price,
					productId: productId,
					quantity: newQuantity,
				},
			],
		});
	};

	const product = response?.cart_products || [];

	const totalPrice = product?.reduce((sum, product) => {
		return sum + product.price * product.quantity;
	}, 0);

	const handleCheckout = async () => {
		const res = await reviewCheckout({
			cartId: response._id as string,
			userId: user._id,
			order_ids: [
				{
					userId: user._id,
					item_products: product.map((item) => ({
						productId: item.productId,
						price: item.price,
						quantity: item.quantity,
						image: item.image,
					})),
				},
			],
		});

		if (res && res.data) {
			router.push("/checkout");
		}
	};

	return (
		<div>
			<div className='flex space-x-5'>
				<div className='w-[65%] space-y-5'>
					{response?.cart_products?.length > 0 ? (
						<div className='flex flex-col '>
							<div className='w-full self-start bg-white shadow-md rounded-lg p-4 border border-neutral-200'>
								<table className='w-full border-collapse'>
									<thead>
										<tr className='border-b'>
											<th className='text-left p-3 w-[40%]'>
												Product
											</th>
											<th className='text-center p-3 w-[20%]'>
												Price
											</th>
											<th className='text-center p-3 w-[20%]'>
												Quantity
											</th>
											<th className='text-center p-3 w-[20%]'>
												Subtotal
											</th>
											<th className='text-center p-3 w-[5%]'></th>
										</tr>
									</thead>
									<tbody>
										{Array.isArray(
											response?.cart_products,
										) &&
											response.cart_products.map(
												(items) => (
													<tr
														className='border-b text-center '
														key={items.productId}
													>
														<td className='flex items-center gap-4 p-3 flex-1'>
															<Image
																src={
																	items.image
																}
																alt={items.name}
																className='w-12 h-12 object-cover rounded'
																width={48}
																height={48}
															/>
															<div className='truncate w-full text-left'>
																<p className='truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]'>
																	{items.name}
																</p>
															</div>
														</td>
														<td className='p-3 w-[20%]'>
															{items.price.toLocaleString(
																"vi-VN",
															)}
														</td>
														<td className='p-3 w-[20%]'>
															<div className='flex items-center justify-center gap-2'>
																<button
																	className='w-8 h-8 flex items-center justify-center text-gray-700 bg-gray-100 rounded-full cursor-pointer'
																	type='button'
																	onClick={() =>
																		handleUpdateQuantity(
																			items.productId,
																			Math.max(
																				(quantities[
																					items
																						.productId
																				] ||
																					items.quantity) -
																					1,
																				1,
																			),
																		)
																	}
																>
																	<FaMinus />
																</button>
																<span className='w-8 text-center'>
																	{
																		items.quantity
																	}
																</span>
																<button
																	className='w-8 h-8 flex items-center justify-center text-gray-700 bg-gray-100 rounded-full cursor-pointer'
																	type='button'
																	onClick={() =>
																		handleUpdateQuantity(
																			items.productId,
																			(quantities[
																				items
																					.productId
																			] ||
																				items.quantity) +
																				1,
																		)
																	}
																>
																	<FaPlus />
																</button>
															</div>
														</td>
														<td className='p-3 w-[20%]'>
															{(
																items.price *
																items.quantity
															).toLocaleString(
																"vi-VN",
															)}
														</td>
														<td className='p-3 w-[5%]'>
															<button
																onClick={() =>
																	removeFromCart(
																		{
																			userId: user._id,
																			productId:
																				items.productId,
																		},
																	)
																}
																className='text-red-500 text-2xl cursor-pointer'
															>
																<MdCancel />
															</button>
														</td>
													</tr>
												),
											)}
									</tbody>
								</table>

								<div className='flex justify-between items-center mt-4'>
									<Link
										href={"/"}
										className='px-4 py-2 border rounded'
									>
										Return to shop
									</Link>
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
					) : (
						<div className='flex flex-col items-center justify-center min-h-[60vh] text-center p-6'>
							<ShoppingCart className='w-16 h-16 text-gray-400 mb-4' />
							<h2 className='text-2xl font-semibold text-gray-700 mb-2'>
								Giỏ hàng của bạn đang trống
							</h2>
							<p className='text-gray-500 mb-6'>
								Hãy quay lại cửa hàng và chọn một vài sản phẩm
								nhé!
							</p>
							<Link
								href='/'
								className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow transition'
							>
								Quay lại cửa hàng
							</Link>
						</div>
					)}
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
									{totalPrice.toLocaleString("vi-VN")}
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
									{totalPrice.toLocaleString("vi-VN")}đ
								</span>
							</div>
						</div>
						<button
							className='py-4 px-10 w-full rounded-full bg-[#616ff6] text-base text-white mt-5'
							onClick={handleCheckout}
						>
							Proceed to checkout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
