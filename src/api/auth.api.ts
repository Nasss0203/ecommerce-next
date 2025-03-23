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
	const data = response.data;
	return data;
};
