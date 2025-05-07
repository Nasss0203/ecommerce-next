import { findAllBrand } from "@/api/brand.api";
import { IData } from "@/types";
import { IBrand } from "@/types/category";
import { useQuery } from "@tanstack/react-query";

const Filter = ({
	id,
	selectedBrand,
	setSelectedBrand,
}: {
	id: string;
	selectedBrand: string;
	setSelectedBrand: (id: string) => void;
}) => {
	const { data } = useQuery({
		queryKey: ["brand"],
		queryFn: () => findAllBrand(id),
	});

	const itemsBrand: IData<IBrand[]> = data;
	const items = itemsBrand?.data;
	return (
		<div className='flex items-center gap-2 md:hidden overflow-x-auto'>
			<div className='flex items-center gap-2 md:hidden'>
				{selectedBrand ? (
					items
						?.filter((b) => b._id === selectedBrand)
						.map((item) => (
							<div
								key={item._id}
								className='flex items-center justify-between px-3 py-2 bg-gray-100 rounded gap-3'
							>
								<span className='text-xs text-[#1a1a1a]'>
									{item.brand_name}
								</span>
								<button
									onClick={() => setSelectedBrand("")}
									className='text-red-500 font-bold text-sm'
								>
									×
								</button>
							</div>
						))
				) : (
					<div className='flex items-center gap-2 '>
						{items?.map(
							(item) =>
								item?.products?.length > 0 && (
									<div
										key={item._id}
										onClick={() =>
											setSelectedBrand(item._id)
										}
										className='cursor-pointer px-3 py-2 bg-gray-200 rounded text-xs text-[#1a1a1a] flex justify-between items-center overflow-x-auto overflow-hidden'
									>
										<span>{item?.brand_name}</span>
									</div>
								),
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Filter;
