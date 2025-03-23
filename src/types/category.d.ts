export interface ICategory {
	_id: string;
	category_name: string;
}

export interface IBrand {
	_id: string;
	brand_name: string;
	categories: string;
}
