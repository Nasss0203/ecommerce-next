// hooks/useHandleAddToCart.ts

import { toast } from "sonner";
import { useAddCart } from "./useCart";
import { useUser } from "./useUser";

interface ProductInfo {
	productId: string;
	quantity?: number;
	name: string;
	image: string;
	price: number;
}

export const useHandleAddToCart = () => {
	const { addToCart } = useAddCart();
	const { user } = useUser();

	const handleAddToCart = (product: ProductInfo) => {
		if (!user?._id) {
			console.warn("User not logged in");
			return;
		}

		const payload = {
			userId: user._id,
			products: {
				...product,
				quantity: product.quantity ?? 1,
			},
		};
		if (payload && payload.userId && payload.products) {
			toast.success("Product added successfully");
		}
		if (!payload) {
			toast.error("Failed to add product.");
		}

		addToCart(payload);
	};

	return { handleAddToCart };
};
