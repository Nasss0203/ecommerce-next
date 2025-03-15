"use client";
import { CardItems, Feedback } from "@/components/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { breakpoints } from "@/constant";
import Image from "next/image";
import { useState } from "react";
import { BsBag } from "react-icons/bs";
import { FaMinus, FaPlay, FaPlus } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { MdOutlineDiscount, MdOutlineStarPurple500 } from "react-icons/md";

const Details = () => {
	const [count, setCount] = useState<number>(0);
	return (
		<div>
			<div className={`${breakpoints} flex flex-col gap-6`}>
				<div className='flex gap-6 justify-between'>
					<div className='flex items-center gap-2'>
						<div></div>
						<div className='w-[550px]'>
							<Image
								src={"/image2.png"}
								alt=''
								width={600}
								height={600}
								className='object-cover w-full h-full'
							></Image>
						</div>
					</div>
					<div>
						<div className='flex gap-1 text-xl items-center'>
							Chinese Cabbage
							<span className='px-2 py-1 inline-flex rounded-sm bg-green-300 text-green-700 text-xs font-normal'>
								In Stock
							</span>
						</div>
						<div className='flex flex-col gap-5'>
							<div className='flex items-center gap-1'>
								<div className='flex items-center gap-1'>
									<div className='items-center flex gap-0.5'>
										{Array(5)
											.fill(0)
											.map((_, index) => (
												<MdOutlineStarPurple500
													key={index}
													className='text-yellow-500'
												/>
											))}
									</div>
									<span className='text-sm text-[#666]'>
										4.93
									</span>
								</div>
								<LuDot />
								<div className='text-sm flex items-center gap-1'>
									<span className='text-[#333] font-medium'>
										SKU:
									</span>
									<span className='text-[#666]'>
										2,51,594
									</span>
								</div>
							</div>
							<div className='items-center flex gap-3 pb-5 border-b border-[#E5E5E5]'>
								<div className='flex items-center gap-1'>
									<span className='text-[#B3B3B3] line-through text-xl font-normal'>
										$48.00
									</span>
									<span className='text-[#2C742F] line-clamp-none text-2xl'>
										$17.28
									</span>
								</div>
								<div className='px-2.5 py-2 rounded-full bg-red-100 text-red-500 text-xs'>
									64% Off
								</div>
							</div>
							<div className='space-y-3 pb-5 border-b border-[#E5E5E5]'>
								<div className=''>
									<div className='flex items-center'>
										<span className='text-[#1A1A1A] text-sm'>
											Brand:
										</span>
										<span></span>
									</div>
								</div>
								<p className='line-clamp-3 text-[#808080] text-sm'>
									Class aptent taciti sociosqu ad litora
									torquent per conubia nostra, per inceptos
									himenaeos. Nulla nibh diam, blandit vel
									consequat nec, ultrices et ipsum. Nulla
									varius magna a consequat pulvinar.
								</p>
							</div>
							<div className='flex items-center gap-4 pb-5 border-b border-[#E5E5E5]'>
								<div className='flex items-center border border-gray-300 rounded-full px-2 py-1.5'>
									<button
										className='w-9 h-9 flex items-center justify-center text-gray-700 bg-gray-100 rounded-full cursor-pointer'
										type='button'
										onClick={() => setCount(count - 1)}
									>
										<FaMinus />
									</button>
									<span className='px-3 w-12 text-center'>
										{count}
									</span>
									<button
										className='w-10 h-10 flex items-center justify-center text-gray-700 bg-gray-100 rounded-full  cursor-pointer'
										type='button'
										onClick={() => setCount(count + 1)}
									>
										<FaPlus />
									</button>
								</div>
								<button
									className='bg-[#616ff6] flex-1 text-white font-medium rounded-full px-10 py-4 flex justify-center items-center gap-2  transition-colors'
									type='button'
								>
									Add to Cart
									<span className='text-xl'>
										<BsBag />
									</span>
								</button>
								<div className='w-12 h-12 text-2xl  rounded-full bg-blue-100  flex items-center justify-center text-[#616ff6]'>
									<IoMdHeartEmpty />
								</div>
							</div>
							<div className='flex flex-col gap-2'>
								<div className=' flex items-center gap-1'>
									<span className='text-[#1a1a1a] text-sm'>
										Category:
									</span>
									<span className='text-[#808080] text-sm'>
										Vegetables
									</span>
								</div>
								<div className=' flex items-center gap-1'>
									<span className='text-[#1a1a1a] text-sm'>
										Tag:
									</span>
									<div className='text-[#808080] text-sm'>
										<span>Vegetables, Healthy</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='w-full '>
					<Tabs defaultValue='descriptions' className='w-full'>
						<div className='flex justify-center border-b py-2 border-[#E5E5E5]'>
							<TabsList>
								<TabsTrigger value='descriptions'>
									Descriptions
								</TabsTrigger>
								<TabsTrigger value='additional_information'>
									Additional Information
								</TabsTrigger>
								<TabsTrigger value='customer_feedback'>
									Customer Feedback
								</TabsTrigger>
							</TabsList>
						</div>
						<div className='flex w-full justify-between py-4'>
							<div className='py-4 w-[50%]'>
								<TabsContent value='descriptions'>
									<div className=''>
										<p>
											Sed commodo aliquam dui ac porta.
											Fusce ipsum felis, imperdiet at
											posuere ac, viverra at mauris.
											Maecenas tincidunt ligula a sem
											vestibulum pharetra. Maecenas auctor
											tortor lacus, nec laoreet nisi
											porttitor vel. Etiam tincidunt metus
											vel dui interdum sollicitudin.
											Mauris sem ante, vestibulum nec orci
											vitae, aliquam mollis lacus. Sed et
											condimentum arcu, id molestie
											tellus. Nulla facilisi. Nam
											scelerisque vitae justo a convallis.
											Morbi urna ipsum, placerat quis
											commodo quis, egestas elementum leo.
											Donec convallis mollis enim. Aliquam
											id mi quam. Phasellus nec fringilla
											elit. Nulla mauris tellus, feugiat
											quis pharetra sed, gravida ac dui.
											Sed iaculis, metus faucibus
											elementum tincidunt, turpis mi
											viverra velit, pellentesque
											tristique neque mi eget nulla. Proin
											luctus elementum neque et pharetra.
										</p>
									</div>
								</TabsContent>
								<TabsContent value='additional_information'>
									Change your password here.
								</TabsContent>
								<TabsContent value='customer_feedback'>
									<div className='flex flex-col gap-5'>
										{Array(4)
											.fill(0)
											.map((item, index) => (
												<div key={index}>
													<Feedback
														key={index}
													></Feedback>
													<hr />
												</div>
											))}
										<div>Load more</div>
									</div>
								</TabsContent>
							</div>
							<div className='flex flex-col gap-5'>
								<div className='w-[536px] h-[300px] relative group'>
									<Image
										src={"/Image3.png"}
										alt=''
										width={536}
										height={300}
										unoptimized
										className='w-full h-full object-cover'
									></Image>
									<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity delay-0 duration-500 ease-in-out'>
										<div className='w-[50px] h-[50px] bg-[#616ff6] rounded-full flex items-center justify-center text-white'>
											<FaPlay />
										</div>
									</div>
								</div>
								<div className='border border-neutral-300 rounded-md px-5 py-6 flex items-center justify-between'>
									<div className='flex items-center gap-2'>
										<span className='text-2xl text-[#616ff6]'>
											<MdOutlineDiscount />
										</span>
										<div className='flex flex-col'>
											<span className='text-sm font-medium text-[#1a1a1a]'>
												64% Discount
											</span>
											<p className='text-[13px] text-[#808080] font-normal'>
												Save your 64% money with us
											</p>
										</div>
									</div>
									<div className='flex items-center gap-2'>
										<span className='text-2xl text-[#616ff6]'>
											<MdOutlineDiscount />
										</span>
										<div className='flex flex-col'>
											<span className='text-sm font-medium text-[#1a1a1a]'>
												64% Discount
											</span>
											<p className='text-[13px] text-[#808080] font-normal'>
												Save your 64% money with us
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Tabs>
				</div>
				<div className='flex flex-col gap-6'>
					<h1 className='text-3xl text-[#1a1a1a] text-center font-semibold'>
						Related Products
					</h1>
					<div className='grid grid-cols-5'>
						{Array(5)
							.fill(0)
							.map((items, index) => (
								<CardItems key={index}></CardItems>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
