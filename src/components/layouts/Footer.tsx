import { breakpoints } from "@/constants";
import Image from "next/image";
import {
	FaApplePay,
	FaFacebook,
	FaInstagram,
	FaXTwitter,
} from "react-icons/fa6";
import { SiMastercard, SiVisa } from "react-icons/si";

const Footer = () => {
	return (
		<footer className='flex flex-col'>
			<div className='bg-[#F7F7F7] py-5'>
				<div
					className={`${breakpoints} flex items-center justify-between`}
				>
					<div className='flex flex-col w-[440px]'>
						<h2 className='text-2xl font-semibold text-[#1a1a1a]'>
							Subcribe our Newsletter
						</h2>
						<p className='text-sm text-[#999]'>
							Pellentesque eu nibh eget mauris congue mattis
							mattis nec tellus. Phasellus imperdiet elit eu
							magna.
						</p>
					</div>
					<div className='flex items-center gap-5'>
						<div className='flex items-center relative'>
							<div className='py-[14px] px-6 border border-[#E6e6e6] border-r-0 rounded-full w-[500px] pr-16'>
								<input
									type='text'
									name=''
									id=''
									className='w-full'
									placeholder='Your email address'
								/>
							</div>
							<button className='py-[16px] px-10 rounded-full bg-[#616ff6] text-white font-semibold absolute right-1'>
								Subscribe
							</button>
						</div>
						<div className='flex items-center gap-3 text-xl text-[#888]'>
							<span>
								<FaFacebook />
							</span>
							<span>
								<FaXTwitter />
							</span>
							<span>
								<FaInstagram />
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-[#1A1A1A] pt-[60px]'>
				<div className={`${breakpoints} flex flex-col gap-[60px]`}>
					<div className='flex items-center gap-[112px]'>
						<div className='flex flex-col w-[330px] gap-3'>
							<div className='flex items-center gap-2'>
								<Image
									src={"/sneat-logo.png"}
									alt=''
									width={20}
									height={20}
								></Image>
								<p className='font-medium text-3xl text-white'>
									E-commerce
								</p>
							</div>
							<p className='text-[#808080] text-sm'>
								Morbi cursus porttitor enim lobortis molestie.
								Duis gravida turpis dui, eget bibendum magna
								congue nec.
							</p>
							<div className='flex items-center gap-3 text-white text-sm'>
								<div className='border-b border-[#616ff6] pb-1'>
									<p>(219) 555-0114</p>
								</div>
								<span className='text-base text-[#808080]'>
									or
								</span>
								<div className='border-b border-[#616ff6] pb-1'>
									<p>Proxy@gmail.com</p>
								</div>
							</div>
						</div>
						<div className='grid grid-cols-4 gap-[120px]'>
							<div className='space-y-4'>
								<h4 className='text-base text-white font-medium'>
									My Account
								</h4>
								<ul className='flex flex-col text-[#808080] gap-2 text-sm'>
									<li>My Account</li>
									<li>Order History</li>
									<li>Shoping Cart</li>
									<li>Wishlist</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='border-[#999] border-t py-6 flex items-center justify-between'>
						<p className='text-[#808080] text-sm'>
							Ecobazar eCommerce © 2021. All Rights Reserved
						</p>
						<div className=' flex items-center gap-1'>
							<span className='px-2 rounded-md flex items-center border border-[#999] py-0.5 justify-between text-white text-3xl'>
								<FaApplePay />
							</span>
							<span className='px-2 rounded-md flex items-center border border-[#999] py-0.5 justify-between text-white text-3xl'>
								<SiVisa />
							</span>
							<span className='px-2 rounded-md flex items-center border border-[#999] py-0.5 justify-between text-white text-3xl'>
								<SiMastercard />
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
