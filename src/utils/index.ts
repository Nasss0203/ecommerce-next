/**
 * @returns {string | null}
 */
export function getRefreshToken(): string | null {
	try {
		const tokenString = localStorage.getItem("tokens");
		if (!tokenString) {
			console.error("Không tìm thấy 'tokens' trong localStorage.");
			return null;
		}

		const tokens = JSON.parse(tokenString);
		return tokens?.refresh_token || null;
	} catch (error) {
		console.error("Lỗi khi lấy refresh token từ localStorage:", error);
		return null;
	}
}

export const convertDate = (date: Date) => {
	return new Date(date).toLocaleDateString("en-GB"); // Trả về "14/04/2025"
};
