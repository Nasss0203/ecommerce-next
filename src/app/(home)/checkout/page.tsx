"use client";
import { findOneCheckout } from "@/api/checkout.api";
import { createOrder } from "@/api/order.api";
import { InputAddress } from "@/components/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ICheckout } from "@/interface/checkout.interface";
import { OrderSchema, OrderSchemaType } from "@/validator/order.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";

interface Address {
	wardName: string;
	provinceName: string;
	districtName: string;
	districtId: string;
	wardId: string;
	provinceId: string;
}

const Checkout = () => {
	const checkoutId =
		typeof window !== "undefined"
			? localStorage.getItem("checkoutId")
			: null;

	const router = useRouter();

	const queryClient = useQueryClient();

	const [shippingAddress, setShippingAddress] = useState<Address>();
	const form = useForm<OrderSchemaType>({
		resolver: zodResolver(OrderSchema),
		defaultValues: {
			cartId: "",
			checkoutId: "",
			userId: "",
			user_address: {
				city: "",
				district: "",
				street: "",
				ward: "",
			},
		},
	});

	const mutation = useMutation({
		mutationFn: (values: OrderSchemaType) => createOrder(values),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["cart"] });
			localStorage.removeItem("checkoutId");
			router.push("/thanks");
		},

		onError: (error) => {
			console.error("Tạo order:", error);
		},
	});

	const { data } = useQuery({
		queryKey: ["checkout", checkoutId],
		queryFn: () =>
			checkoutId ? findOneCheckout(checkoutId) : Promise.resolve(null),
		enabled: !!checkoutId,
	});
	console.log(data);

	const dataCheckout: ICheckout = data?.data || [];

	const handleAddressChange = (addr: SetStateAction<Address | undefined>) => {
		setShippingAddress(addr);
	};

	async function onSubmit(values: OrderSchemaType) {
		mutation.mutate({
			...values,
			cartId: dataCheckout.checkout_cart,
			checkoutId: dataCheckout._id,
			userId: dataCheckout.checkout_auth,
			user_address: {
				street: values.user_address.street,
				ward: shippingAddress?.wardName as string,
				district: shippingAddress?.districtName as string,
				city: shippingAddress?.provinceName as string,
			},
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-5'>
				<div className='w-[70%]'>
					<div className='flex flex-col space-y-5'>
						<h1 className='text-2xl font-medium text-[#1a1a1a]'>
							Thông tin thanh toán
						</h1>
						<div className='flex flex-col gap-4'>
							<div className='flex flex-col gap-2 flex-1'>
								<FormField
									control={form.control}
									name='user_address.street'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Địa chỉ</FormLabel>
											<FormControl>
												<Input
													placeholder='Your first name'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<InputAddress
								onChange={handleAddressChange}
							></InputAddress>
						</div>
						<div className='flex flex-col gap-2 flex-1'>
							<Label>Ghi chú</Label>
							<Textarea
								placeholder='Notes about your order, e.g. special notes for delivery'
								className='h-[200px]'
							/>
						</div>
					</div>
				</div>
				<div className='w-[30%] self-start bg-white shadow-md rounded-lg p-4 border border-neutral-200'>
					<div className='space-y-2'>
						<h2 className='text-xl text-[#1a1a1a] font-medium'>
							Order Summery
						</h2>
						<div className='space-y-5'>
							<div className='space-y-2'>
								{dataCheckout.checkout_items?.map((item) => (
									<div
										className='flex items-center justify-between'
										key={item.productId}
									>
										<div className='flex items-center gap-1'>
											<div className='w-[60px] h-[60px]'>
												<Image
													src={item.image}
													alt=''
													height={60}
													width={60}
													className='w-full h-full object-cover shrink'
												/>
											</div>
											<div className='flex flex-col'>
												<p className='text-[#1a1a1a] text-sm  w-[200px] truncate'>
													{item.name}
												</p>
												<span className='text-[#1a1a1a] text-xs line-clamp-1'>
													Số lượng: {item.quantity}
												</span>
											</div>
										</div>
										<span className='text-[#1a1a1a] font-medium text-sm'>
											{item.totalPrice}
										</span>
									</div>
								))}
							</div>
							<div className='flex flex-col'>
								<div className='flex items-center justify-between py-3'>
									<span className='text-sm text-[#4D4D4D] '>
										Subtotal:
									</span>
									<span className='text-sm font-medium text-[#1a1a1a] '>
										{dataCheckout.checkout_totalPrice}
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
										{dataCheckout.checkout_grandTotal}đ
									</span>
								</div>
								<hr />
							</div>
							<div className='space-y-3'>
								<h2 className='text-xl text-[#1a1a1a] font-medium'>
									Payment Method
								</h2>
								<RadioGroup
									defaultValue='option-one'
									className='space-y-1'
								>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem
											value='option-one'
											id='option-one'
										/>
										<Label htmlFor='option-one'>
											Option One
										</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem
											value='option-two'
											id='option-two'
										/>
										<Label htmlFor='option-two'>
											Option Two
										</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem
											value='option-twoa'
											id='option-twoa'
										/>
										<Label htmlFor='option-twoa'>
											Option Twoa
										</Label>
									</div>
								</RadioGroup>
							</div>
						</div>
						<button
							className='py-4 px-10 w-full rounded-full bg-[#616ff6] text-base text-white mt-5'
							type='submit'
						>
							Place Order
						</button>
					</div>
				</div>
			</form>
		</Form>
	);
};

export default Checkout;
