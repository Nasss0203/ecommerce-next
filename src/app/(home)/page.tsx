"use client";
import { PopularProduct } from "@/components/product";

const categoryList = [
	{
		id: "67d8600496bba25e72372185",
		name: "Điện thoại",
	},
	{ id: "67dffa14bd08eb7424028563", name: "Laptop" },
];

const Home = () => {
	return (
		<div className='flex flex-col gap-8'>
			{categoryList.map((item) => (
				<PopularProduct
					key={item.id}
					category={item.id}
					name={item.name}
				></PopularProduct>
			))}
		</div>
	);
};

export default Home;
