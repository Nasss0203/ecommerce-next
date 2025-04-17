export interface ICart {
	_id?: string;
	cart_state: string;
	cart_products: [
		{
			productId: string;
			quantity: number;
			name: string;
			image: string;
			price: number;
		},
	];
	cart_count_product: number;
	cart_userId: string;
}
