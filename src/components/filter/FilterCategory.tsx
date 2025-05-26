"use client";
import { findAllBrand } from "@/api/brand.api";
import { IData } from "@/types";
import { IBrand } from "@/types/category";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Slider } from "../ui/slider";

const FilterCategory = ({
	id,
	selectedBrand,
	setSelectedBrand,
}: {
	id: string;
	selectedBrand: string;
	setSelectedBrand: (id: string) => void;
}) => {
	const [range, setRange] = useState([0, 100]);
	const { data } = useQuery({
		queryKey: ["brand"],
		queryFn: () => findAllBrand(id),
	});

	const itemsBrand: IData<IBrand[]> = data;
	const items = itemsBrand?.data;
	return (
		<div className='col-span-1 pr-5 hidden lg:block'>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-4'>
						<h3 className='text-xl font-medium text-[#1a1a1a]'>
							Danh mục
						</h3>

						<RadioGroup
							value={selectedBrand}
							onValueChange={setSelectedBrand}
						>
							<div className='flex items-center space-x-2 '>
								<RadioGroupItem value={""} id='clear-filter' />
								<Label
									htmlFor='clear-filter'
									className='text-sm'
								>
									Tất cả
								</Label>
							</div>
							{items?.map((item) => {
								return (
									<>
										{item.products?.length > 0 ? (
											<div
												key={item._id}
												className='flex items-center space-x-2'
											>
												<RadioGroupItem
													value={item._id}
													id={item._id}
												/>
												<Label
													htmlFor={item._id}
													className='text-sm'
												>
													<span className='uppercase'>
														{item.brand_name}
													</span>
													<span className='text-[#808080] '>
														(
														{item.products
															?.length || 0}
														)
													</span>
												</Label>
											</div>
										) : null}
									</>
								);
							})}
						</RadioGroup>

						<hr />
					</div>
					<div className='flex flex-col gap-4'>
						<h3 className='text-xl font-medium text-[#1a1a1a]'>
							Giá
						</h3>
						<Slider
							value={range}
							onValueChange={setRange}
							defaultValue={range}
							max={100}
							step={1}
						/>
						<div className='flex items-center gap-1'>
							<span className='text-[#4D4D4D]'>Giá:</span>
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
			<h3 className='text-xl font-medium text-[#1a1a1a]'>Đánh giá</h3>
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
