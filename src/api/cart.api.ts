import axios from "./axios";
export const addCart = async ({
	userId,
	products = {},
}: {
	userId: string;
	products: object;
}) => {
	const tokenString = localStorage.getItem("tokens");

	if (!tokenString) {
		console.error("No auth or tokens found in localStorage");
		return;
	}

	const tokens = JSON.parse(tokenString);
	const refreshToken = tokens?.refresh_token || "";

	const response = await axios.post(
		"/cart",
		{
			userId,
			products,
		},
		{
			headers: {
				Authorization: `Bearer ${refreshToken}`,
			},
		},
	);
	return response.data;
};

export const updateCart = async ({
	userId,
	item_products = {},
}: {
	userId: string;
	item_products: object;
}) => {
	const tokenString = localStorage.getItem("tokens");

	if (!tokenString) {
		console.error("No auth or tokens found in localStorage");
		return;
	}

	const tokens = JSON.parse(tokenString);
	const refreshToken = tokens?.refresh_token || "";

	const response = await axios.post(
		"/cart/update",
		{
			userId,
			item_products,
		},
		{
			headers: {
				Authorization: `Bearer ${refreshToken}`,
			},
		},
	);
	return response.data;
};

export const getListCart = async () => {
	const tokenString = localStorage.getItem("tokens");

	if (!tokenString) {
		console.error("No auth or tokens found in localStorage");
		return;
	}

	const tokens = JSON.parse(tokenString);
	const refreshToken = tokens?.refresh_token || "";

	const response = await axios.get("/cart", {
		headers: {
			Authorization: `Bearer ${refreshToken}`,
		},
	});
	return response.data;
};

export const deleteCart = async ({
	userId,
	productId,
}: {
	userId: string;
	productId: string;
}) => {
	const tokenString = localStorage.getItem("tokens");

	if (!tokenString) {
		console.error("No auth or tokens found in localStorage");
		return;
	}

	const tokens = JSON.parse(tokenString);
	const refreshToken = tokens?.refresh_token || "";

	const response = await axios.delete("/cart", {
		data: { userId, productId },
		headers: {
			Authorization: `Bearer ${refreshToken}`,
		},
	});
	console.log(" response~", response);
	return response.data;
};
