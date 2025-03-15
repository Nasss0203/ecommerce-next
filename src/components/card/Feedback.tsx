import { GoStarFill } from "react-icons/go";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Feedback = () => {
	return (
		<div className='flex flex-col gap-1'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<Avatar>
						<AvatarImage src='https://github.com/shadcn.png' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div className='flex flex-col gap-0.5'>
						<p className='text-sm font-medium text-[#1a1a1a]'>
							Kristin Watson
						</p>
						<div className='flex items-center gap-1 text-xs'>
							{Array(5)
								.fill(0)
								.map((item, index) => (
									<span
										className='text-yellow-500'
										key={index}
									>
										<GoStarFill />
									</span>
								))}
						</div>
					</div>
				</div>
				<span className='text-sm text-[#999]'>2 min ago</span>
			</div>
			<p className='text-xs font-normal text-[#808080] line-clamp-3'>
				200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom
				Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Cantons
				Choice, Bok Choi, from USA
			</p>
		</div>
	);
};

export default Feedback;
