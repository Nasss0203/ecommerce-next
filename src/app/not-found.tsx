import { LayoutMain } from "@/components/layouts";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
	return (
		<LayoutMain>
			<div className='flex items-center justify-center py-5'>
				<div className='flex flex-col space-y-7'>
					<div className='w-[580px] h-[350px]'>
						<Image
							src={"/404.png"}
							alt=''
							width={582}
							height={300}
							unoptimized
							className='w-full h-full object-cover shrink'
						></Image>
					</div>
					<div className='text-center w-[610px] flex flex-col space-y-4'>
						<h3 className='text-[40px] text-[#1a1a1a] font-semibold'>
							Oops! page not found
						</h3>
						<p className='text-base text-[#808080]'>
							Ut consequat ac tortor eu vehicula. Aenean accumsan
							purus eros. Maecenas sagittis tortor at metus mollis
						</p>
					</div>
					<div className='flex justify-center'>
						<Link
							href={"/"}
							className='px-8 py-4 text-sm text-white font-medium inline-block rounded-full bg-[#616ff6]'
						>
							Back to Home
						</Link>
					</div>
				</div>
			</div>
		</LayoutMain>
	);
};

export default NotFound;
