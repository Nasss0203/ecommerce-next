export interface IProduct {
	_id: string;
	product_name: string;
	product_thumb: string;
	product_description?: string;
	product_price: number | any;
	product_images?: [string];
	product_slug?: string;
	product_quantity?: number;
	product_category?: {
		_id: string;
		category_name: string;
	};
	product_brand?: {
		_id: string;
		brand_name: string;
	};
	product_attributes?: Record<string, any>;
	product_auth?: string;
	product_ratingAverage?: number;
	product_varations?: any[];
	isDraft?: boolean;
	isPublished?: boolean;
}
