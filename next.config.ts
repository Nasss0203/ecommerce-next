import { fetchCategories } from "@/api/category.api";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		unoptimized: true,
	},
	async rewrites() {
		const response = await fetchCategories();
		const data = Array.isArray(response) ? response : [];

		return data.flatMap((cate: any) => [
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
