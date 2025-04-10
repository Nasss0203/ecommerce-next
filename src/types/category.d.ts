import {IProduct} from "@/types/product";

export interface ICategory {
	_id: string;
	category_name: string;
	products: IProduct[]
}

export interface IBrand {
	_id: string;
	brand_name: string;
	categories: string;
	products: IProduct[]
}
