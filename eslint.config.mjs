import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		rules: {
			// Cảnh báo nhưng không báo lỗi khi có biến không dùng
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					vars: "all",
					args: "after-used",
					ignoreRestSiblings: true,
					argsIgnorePattern: "^_",
				},
			],

			// Cho phép dùng `any` nhưng cảnh báo thay vì lỗi
			"@typescript-eslint/no-explicit-any": "warn",

			// Tắt cảnh báo Next.js bắt buộc file phải có `default export`
			"import/no-anonymous-default-export": "off",
		},
	},
];

export default eslintConfig;
