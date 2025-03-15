"use client";
import { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Slider } from "../ui/slider";

const FilterCategory = () => {
	const [range, setRange] = useState([0, 100]);
	return (
		<div className='col-span-1 pr-5'>
			<div className='flex flex-col gap-4'>
				<div className='inline-flex items-center gap-1 text-white text-sm py-2 px-7 bg-[#616ff6] rounded-full w-fit'>
					<span>Filter</span>
					<FaFilter />
				</div>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-4'>
						<h3 className='text-xl font-medium text-[#1a1a1a]'>
							All Categories
						</h3>
						<RadioGroup defaultValue='option-one'>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem
									value='option-one'
									id='option-one'
								/>
								<Label htmlFor='option-one' className='text-sm'>
									Option One
									<span className='text-[#808080]'>
										(134)
									</span>
								</Label>
							</div>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem
									value='option-two'
									id='option-two'
								/>
								<Label htmlFor='option-two' className='text-sm'>
									Option Two
									<span className='text-[#808080]'>
										(134)
									</span>
								</Label>
							</div>
						</RadioGroup>
						<hr />
					</div>
					<div className='flex flex-col gap-4'>
						<h3 className='text-xl font-medium text-[#1a1a1a]'>
							Price
						</h3>
						<Slider
							value={range}
							onValueChange={setRange}
							defaultValue={range}
							max={100}
							step={1}
						/>
						<div className='flex items-center gap-1'>
							<span className='text-[#4D4D4D]'>Price:</span>
							<span className='text-[#1a1a1a]'>
								{range[0]} - {range[1]}
							</span>
						</div>
						<hr />
					</div>
					<Rating></Rating>
				</div>
			</div>
		</div>
	);
};

export default FilterCategory;

function Rating() {
	return (
		<div className='flex flex-col gap-4'>
			<h3 className='text-xl font-medium text-[#1a1a1a]'>Rating</h3>
			<div className='flex items-center space-x-2'>
				<Checkbox id='terms' />
				<label
					htmlFor='terms'
					className='text-sm flex items-center space-x-0.5 text-yellow-500'
				>
					{Array(5)
						.fill(0)
						.map((_, index) => (
							<IoMdStar key={index} />
						))}
				</label>
			</div>
			<div className='flex items-center space-x-2'>
				<Checkbox id='terms' />
				<label
					htmlFor='terms'
					className='text-sm flex items-center space-x-0.5 text-yellow-500'
				>
					{Array(4)
						.fill(0)
						.map((_, index) => (
							<IoMdStar key={index} />
						))}
				</label>
			</div>
			<div className='flex items-center space-x-2'>
				<Checkbox id='terms' />
				<label
					htmlFor='terms'
					className='text-sm flex items-center space-x-0.5 text-yellow-500'
				>
					{Array(3)
						.fill(0)
						.map((_, index) => (
							<IoMdStar key={index} />
						))}
				</label>
			</div>
			<div className='flex items-center space-x-2'>
				<Checkbox id='terms' />
				<label
					htmlFor='terms'
					className='text-sm flex items-center space-x-0.5 text-yellow-500'
				>
					{Array(2)
						.fill(0)
						.map((_, index) => (
							<IoMdStar key={index} />
						))}
				</label>
			</div>
			<div className='flex items-center space-x-2'>
				<Checkbox id='terms' />
				<label
					htmlFor='terms'
					className='text-sm flex items-center space-x-0.5 text-yellow-500'
				>
					<IoMdStar />
				</label>
			</div>
			<hr />
		</div>
	);
}
