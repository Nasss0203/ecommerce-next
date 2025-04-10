import { CardItems } from "../card";

const RelatedProduct = () => {
	return (
		<div className='flex flex-col gap-6'>
			<h1 className='text-3xl text-[#1a1a1a] text-center font-semibold'>
				Related Products
			</h1>
			<div className='grid gri d-cols-5'>
				{Array(5)
					.fill(0)
					.map((items, index) => (
						<CardItems
							price={0}
							title='s'
							key={index}
							image={"/Image.png"}
							_id={"d"}
						></CardItems>
					))}
			</div>
		</div>
	);
};

export default RelatedProduct;
