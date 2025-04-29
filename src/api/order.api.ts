import { IOrder } from "@/interface/order.interface";
import { getRefreshToken } from "@/utils";
import axios from "./axios";

export const createOrder = async (payload: IOrder) => {
	try {
		const refreshToken = getRefreshToken();
		if (!refreshToken) {
			throw new Error("Refresh token không tồn tại.");
		}
		const resposne = await axios.post("order/create", payload, {
			headers: {
				Authorization: `Bearer ${refreshToken}`,
			},
		});
		console.log(" resposne~", resposne);

		return resposne.data;
	} catch (error) {
		return error;
	}
};

export const findAllOrder = async () => {
	try {
		const refreshToken = getRefreshToken();
		if (!refreshToken) {
			throw new Error("Refresh token không tồn tại.");
		}
		const resposne = await axios.get("order/all", {
			headers: {
				Authorization: `Bearer ${refreshToken}`,
			},
		});

		return resposne.data;
	} catch (error) {
		return error;
	}
};

export const findOneOrder = async (id: string) => {
	try {
		const refreshToken = getRefreshToken();
		if (!refreshToken) {
			throw new Error("Refresh token không tồn tại.");
		}
		const resposne = await axios.get(`order/${id}`, {
			headers: {
				Authorization: `Bearer ${refreshToken}`,
			},
		});

		return resposne.data;
	} catch (error) {
		return error;
	}
};
