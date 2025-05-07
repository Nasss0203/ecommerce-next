import { MdOutlineStarPurple500 } from "react-icons/md";

const Rating = ({ star }: { star: number }) => {
	return (
		<div className='flex items-center gap-1'>
			<div className='items-center flex gap-0.5'>
				{Array(5)
					.fill(0)
					.map((_, index) => (
						<MdOutlineStarPurple500
							key={index}
							className={
								index < Math.round(star)
									? "text-yellow-500"
									: "text-gray-400"
							}
						/>
					))}
			</div>
			<span className='text-[#666] text-xs lg:text-sm'>
				{star.toFixed(1)}
			</span>
		</div>
	);
};

export default Rating;
