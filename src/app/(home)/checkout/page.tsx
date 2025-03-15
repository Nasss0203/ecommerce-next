import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const Checkout = () => {
	return (
		<div className='flex gap-5'>
			<div className='w-[70%] space-y-7'>
				<div className='flex flex-col space-y-5'>
					<h1 className='text-2xl font-medium text-[#1a1a1a]'>
						Billing Information
					</h1>
					<div className='flex flex-col gap-4'>
						<div className='flex items-center gap-4 w-full'>
							<div className='flex flex-col gap-2 flex-1'>
								<Label>First name</Label>
								<Input placeholder='Your first name'></Input>
							</div>
							<div className='flex flex-col gap-2 flex-1'>
								<Label>Last name</Label>
								<Input placeholder='Your last name'></Input>
							</div>
							<div className='flex flex-col gap-2 flex-1'>
								<Label>Company Name (optional)</Label>
								<Input placeholder='Company name'></Input>
							</div>
						</div>
						<div className='flex flex-col gap-2 flex-1'>
							<Label>Street Address</Label>
							<Input placeholder='Street Address'></Input>
						</div>
						<div className='flex items-center gap-4 w-full'>
							<div className='flex flex-col gap-2 flex-1'>
								<Label>Country / Region</Label>
								<Select>
									<SelectTrigger className='w-full'>
										<SelectValue placeholder='Theme' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='light'>
											Light
										</SelectItem>
										<SelectItem value='dark'>
											Dark
										</SelectItem>
										<SelectItem value='system'>
											System
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className='flex flex-col gap-2 flex-1'>
								<Label>States</Label>
								<Select>
									<SelectTrigger className='w-full'>
										<SelectValue placeholder='Theme' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='light'>
											Light
										</SelectItem>
										<SelectItem value='dark'>
											Dark
										</SelectItem>
										<SelectItem value='system'>
											System
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className='flex flex-col gap-2 flex-1'>
								<Label>Zip Code</Label>
								<Input placeholder='Zip Code'></Input>
							</div>
						</div>
						<div className='flex items-center gap-4 w-full'>
							<div className='flex flex-col gap-2 flex-1'>
								<Label>Email</Label>
								<Input placeholder='Email address'></Input>
							</div>
							<div className='flex flex-col gap-2 flex-1'>
								<Label>Phone</Label>
								<Input placeholder='Phone number'></Input>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col space-y-5'>
					<h1 className='text-2xl font-medium text-[#1a1a1a]'>
						Additional Info
					</h1>
					<div className='flex flex-col gap-2 flex-1'>
						<Label>Order Notes (Optional)</Label>
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
							{Array(3)
								.fill(0)
								.map((_, index) => (
									<div
										className='flex items-center justify-between'
										key={index}
									>
										<div className='flex items-center gap-1'>
											<div className='w-[60px] h-[60px]'>
												<Image
													src={"/Image.png"}
													alt=''
													height={60}
													width={60}
													className='w-full h-full object-cover shrink'
												/>
											</div>
											<p className='text-[#1a1a1a] text-sm line-clamp-1'>
												Green Capsicum
											</p>
										</div>
										<span className='text-[#1a1a1a] font-medium text-sm'>
											$70.00
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
					<button className='py-4 px-10 w-full rounded-full bg-[#616ff6] text-base text-white mt-5'>
						Place Order
					</button>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
