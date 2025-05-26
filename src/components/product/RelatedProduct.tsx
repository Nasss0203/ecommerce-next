import { findAllProduct } from "@/api/product.api";
import { ProductTypes } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { CardItems } from "../card";

const RelatedProduct = ({
	brand,
	category,
	currentId,
}: {
	category?: string;
	brand?: string;
	currentId?: string;
}) => {
	const { data } = useQuery({
		queryKey: ["product", category, brand],
		queryFn: () =>
			findAllProduct({
				limit: 5,
				query: {
					category,
					brand,
				},
			}),
	});

	const itemsProduct: ProductTypes = data;
	let items = itemsProduct?.data?.data;

	if (currentId) {
		items = items?.filter((item) => item._id !== currentId);
	}

	return (
		<div className='flex flex-col gap-6'>
			<h1 className='text-3xl text-[#1a1a1a]  font-semibold'>
				Sản phẩm liên quan
			</h1>
			<div className='grid lg:grid-cols-5 grid-cols-2'>
				{items?.map((item) => (
					<CardItems
						category={item.product_category?.category_name}
						brand={item?.product_brand?.brand_name}
						_id={item._id}
						image={item.product_thumb}
						price={item.product_price}
						price_discount={item.product_price}
						title={item.product_name}
						rate={4.5}
						key={item._id}
					></CardItems>
				))}
			</div>
		</div>
	);
};

export default RelatedProduct;
