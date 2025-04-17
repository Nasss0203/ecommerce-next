import { IQuery } from "@/types";
import axios from "./axios";

export const findAllProduct = async ({
	limit = 10,
	page = 1,
	query,
	filter,
}: IQuery) => {
	const response = await axios.get("/products", {
		params: {
			limit,
			page,
			...query,
			...filter,
		},
	});
	return response?.data;
};

export const getDetailProduct = async (id: string) => {
	const response = await axios.get(`/products/${id}`);

	return response.data;
};
