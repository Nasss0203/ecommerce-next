import axios from "./axios";
export const findAllCategory = async () => {
	const response = await axios.get("/category");
	return response.data;
};

export const fetchCategories = async () => {
	try {
		const res = await findAllCategory();
		return res?.data || [];
	} catch (error) {
		return error;
	}
};
