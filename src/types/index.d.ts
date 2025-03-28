export interface IProductQuery {
	category?: string;
	brand?: string;
	price?: string;
}

export interface IProductFilter {
	isPublished?: boolean;
	isDraft?: boolean;
}

export interface IQuery {
	limit?: number;
	page?: number;
	query?: IProductQuery;
	filter?: IProductFilter | IProductQuery;
}

export interface IBackend<T> {
	statusCode?: number;
	message?: string;
	data?: T;
}

export interface IData<T> {
	limit?: number;
	page?: number;
	total?: number;
	data: T;
}

export type ProductTypes = IBackend<IData<IProduct[]>>;

interface ICardItems {
	_id?: string;
	path?: string;
	image: string;
	title?: string;
	price?: number;
	price_discount?: number;
	brand?: string;
	rate?: number;
	sale?: number;
}
