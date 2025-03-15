import { CardItems } from "@/components/card";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
	return (
		<div className='flex flex-col gap-6'>
			<div className='flex items-center justify-between'>
				<h2 className='font-medium text-2xl text-[#1A1A1A]'>
					Popular Products
				</h2>
				<div className='flex items-center gap-2 text-[#616ff6]'>
					<span className=''>View all</span>
					<FaArrowRightLong />
				</div>
			</div>
			<div className='grid grid-cols-5'>
				{Array(10)
					.fill(0)
					.map((items, index) => (
						<CardItems key={index}></CardItems>
					))}
			</div>
		</div>
	);
};

export default Home;
