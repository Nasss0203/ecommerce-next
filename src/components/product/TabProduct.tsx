import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import { MdOutlineDiscount } from "react-icons/md";
import { Feedback } from "../card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const TabProduct = () => {
	return (
		<div className='w-full'>
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
									Sed commodo aliquam dui ac porta. Fusce
									ipsum felis, imperdiet at posuere ac,
									viverra at mauris. Maecenas tincidunt ligula
									a sem vestibulum pharetra. Maecenas auctor
									tortor lacus, nec laoreet nisi porttitor
									vel. Etiam tincidunt metus vel dui interdum
									sollicitudin. Mauris sem ante, vestibulum
									nec orci vitae, aliquam mollis lacus. Sed et
									condimentum arcu, id molestie tellus. Nulla
									facilisi. Nam scelerisque vitae justo a
									convallis. Morbi urna ipsum, placerat quis
									commodo quis, egestas elementum leo. Donec
									convallis mollis enim. Aliquam id mi quam.
									Phasellus nec fringilla elit. Nulla mauris
									tellus, feugiat quis pharetra sed, gravida
									ac dui. Sed iaculis, metus faucibus
									elementum tincidunt, turpis mi viverra
									velit, pellentesque tristique neque mi eget
									nulla. Proin luctus elementum neque et
									pharetra.
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
											<Feedback key={index}></Feedback>
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
	);
};

export default TabProduct;
