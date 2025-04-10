import { findAllCategory } from "@/api/category.api";
import type { NextConfig } from "next";

const fetchCategories = async () => {
	try {
		const res = await findAllCategory();
		return res.data || [];
	} catch (error) {
		return error;
	}
};

const nextConfig: NextConfig = {
	images: {
		unoptimized: true,
	},
	async rewrites() {
		const categories = await fetchCategories();
		const data = categories || [];
		return data?.flatMap((cate: any) => [
			{
				source: `/${cate.category_name}`,
				destination: `/category/${cate._id}`,
			},
			{
				source: `/${cate.category_name}/:brand/:id`,
				destination: `/details/:id`,
			},
		]);
	},
};

export default nextConfig;
