export interface OrderItemProduct {
	productId: string;
	quantity: number;
	image: string;
	price: number;
}

export interface OrderItem {
	userId: string;
	// shop_discounts?: {
	// 	shop_id: string;
	// 	discountId: string;
	// }[];
	item_products: OrderItemProduct[];
}

export interface CartOrderPayload {
	cartId: string;
	userId: string;
	order_ids: OrderItem[];
}

export interface CheckoutItem {
	productId: string;
	name: string;
	image: string;
	price: number;
	quantity: number;
	totalPrice: number;
	discount: number;
}

export interface ICheckout {
	_id: string;
	checkout_cart: string;
	checkout_auth: string;
	checkout_items: CheckoutItem[];
	checkout_totalPrice: number;
	checkout_discount: number;
	checkout_grandTotal: number;
	checkout_shippingFee: number;
	checkout_tax: number;
	checkout_paymentStatus: "pending" | "paid" | "failed";
}
