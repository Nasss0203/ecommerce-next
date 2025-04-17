export interface IOrder {
	cartId: string;
	userId: string;
	checkoutId: string;
	user_address: IUserAddressOrder;
}

export interface IUserAddressOrder {
	street: string;
	ward: string;
	district: string;
	city: string;
}
