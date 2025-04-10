"use client";
import { findAllProduct } from "@/api/product.api";
import { CardItems } from "@/components/card";
import { ProductTypes } from "@/types";
import { IProduct } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
	const { data } = useQuery({
		queryKey: ["product"],
		queryFn: () => findAllProduct({ limit: 20 }),
	});

	const itemsProduct: ProductTypes = data;
	const items = itemsProduct?.data?.data;
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
				{items?.map((item: IProduct) => (
					<CardItems
						category={item.product_category?.category_name}
						_id={item._id}
						image={item.product_thumb}
						price={item.product_price}
						price_discount={item.product_price}
						title={item.product_name}
						rate={4.5}
						key={item._id}
						brand={item?.product_brand?.brand_name}
					></CardItems>
				))}
			</div>
		</div>
	);
};

export default Home;
