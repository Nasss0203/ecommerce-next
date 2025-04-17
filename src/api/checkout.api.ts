import { CartOrderPayload } from "@/interface/checkout.interface";
import { getRefreshToken } from "@/utils";
import axios from "./axios";

export const reviewCheckout = async (payload: CartOrderPayload) => {
	try {
		const refreshToken = getRefreshToken();
		if (!refreshToken) {
			throw new Error("Refresh token không tồn tại.");
		}

		const response = await axios.post(
			"checkout/review",
			{
				cartId: payload.cartId,
				userId: payload.userId,
				order_ids: payload.order_ids,
			},
			{
				headers: {
					Authorization: `Bearer ${refreshToken}`,
				},
			},
		);
		const checkoutId = response.data.data._id;
		localStorage.setItem("checkoutId", checkoutId);

		return response.data;
	} catch (error: any) {
		console.error(
			"Lỗi khi review checkout:",
			error?.response?.data || error.message,
		);
		throw error;
	}
};

export const findOneCheckout = async (checkoutId: string) => {
	try {
		const refreshToken = getRefreshToken();
		if (!refreshToken) {
			throw new Error("Refresh token không tồn tại.");
		}

		const response = await axios.get(`checkout/${checkoutId}`, {
			headers: {
				Authorization: `Bearer ${refreshToken}`,
			},
		});

		return response.data;
	} catch (error: any) {
		console.error(
			"Lỗi khi review checkout:",
			error?.response?.data || error.message,
		);
		throw error;
	}
};
