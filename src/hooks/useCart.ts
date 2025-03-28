import { addCart, deleteCart, getListCart, updateCart } from "@/api/cart.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useUser } from "./useUser";

export function useAddCart() {
	const queryClient = useQueryClient();
	const { user } = useUser();

	const { mutate: addToCart } = useMutation({
		mutationFn: async ({
			userId,
			products,
		}: {
			userId: string;
			products: object;
		}) => await addCart({ userId, products }),

		onMutate: async ({ products }) => {
			await queryClient.cancelQueries({ queryKey: ["cart"] });

			const previousCart = queryClient.getQueryData<{
				data?: any;
			}>(["cart"]);

			if (!Array.isArray(previousCart?.data)) {
				return { previousCart };
			}

			queryClient.setQueryData(["cart"], (oldCart: any) => {
				return [...oldCart.data, products];
			});

			return { previousCart };
		},

		onError: (err, _, context) => {
			queryClient.setQueryData(["cart"], context?.previousCart);
		},

		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["cart"] });
		},
	});

	const { mutate: updateCartItem, error: updateError } = useMutation({
		mutationFn: async ({
			userId,
			item_products: [{ old_quantity, price, quantity, productId }],
		}: {
			userId: string;
			item_products: {
				quantity: number;
				price: number;
				old_quantity: number;
				productId: string;
			}[];
		}) =>
			await updateCart({
				userId,
				item_products: [
					{
						old_quantity,
						price,
						quantity,
						productId,
					},
				],
			}),

		onSuccess: (data, { userId }) => {
			queryClient.invalidateQueries({ queryKey: ["cart"] });
		},

		onError: (err) => {
			console.error("Update cart error:", err);
		},
	});

	const { isPending: isPendingListCart, data: dataListCart } = useQuery({
		queryKey: ["cart", user?._id],
		queryFn: () => (user ? getListCart() : { data: [] }),
		enabled: !!user,
	});

	const { mutate: removeFromCart, error: deleteError } = useMutation({
		mutationFn: async ({
			userId,
			productId,
		}: {
			userId: string;
			productId: string;
		}) => await deleteCart({ userId, productId }),

		onSuccess: (data, { userId }) => {
			console.log("Cart item deleted:", data);
			queryClient.invalidateQueries({ queryKey: ["cart"] });
		},

		onError: (err) => {
			console.error("Delete cart error:", err);
		},
	});

	return {
		addToCart,
		updateCartItem,
		updateError,
		dataListCart,
		isPendingListCart,
		removeFromCart,
		deleteError,
	};
}

export function useUpdateCart() {}
