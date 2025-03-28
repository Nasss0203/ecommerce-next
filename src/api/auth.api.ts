import { LoginSchemaType, RegisterSchemaType } from "@/validator/auth.schema";
import axios from "./axios";

export const register = async ({
	email,
	username,
	password,
}: RegisterSchemaType) => {
	const response = await axios.post("/auth/register", {
		email,
		username,
		password,
	});
	console.log(" response~", response);
	const data = response.data;
	return data;
};

export const login = async ({ email, password }: LoginSchemaType) => {
	const response = await axios.post("/auth/login", {
		email,
		password,
	});
	console.log(" response~", response);
	const metadata = response.data;

	if (metadata) {
		const { tokens, ...userData } = metadata.data;
		localStorage.setItem("auth", JSON.stringify(userData));
		localStorage.setItem("tokens", JSON.stringify(tokens));
	}
	return metadata;
};

export const logout = async () => {
	try {
		const tokenString = localStorage.getItem("tokens");

		if (!tokenString) {
			console.error("No auth or tokens found in localStorage");
			return;
		}

		const tokens = JSON.parse(tokenString);
		const refreshToken = tokens?.refresh_token || "";

		const response = await axios.post(
			"/auth/logout",
			{},
			{
				headers: {
					Authorization: `Bearer ${refreshToken}`,
				},
			},
		);
		console.log(" response~", response);

		if (response) {
			localStorage.removeItem("auth");
			localStorage.removeItem("tokens");
		}
		console.log(" response~", response);

		return response;
	} catch (error) {
		console.error("Error during log out:", error);
		throw error;
	}
};
