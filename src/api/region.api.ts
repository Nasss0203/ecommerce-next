export const fetchProvinces = async () => {
	const res = await fetch("https://esgoo.net/api-tinhthanh/1/0.htm");
	const data = await res.json();
	if (data.error === 0) return data.data;
	throw new Error("Lỗi khi tải danh sách tỉnh");
};

export const fetchDistricts = async (provinceId: string) => {
	const res = await fetch(
		`https://esgoo.net/api-tinhthanh/2/${provinceId}.htm`,
	);
	const data = await res.json();
	if (data.error === 0) return data.data;
	throw new Error("Lỗi khi tải danh sách quận");
};

export const fetchWards = async (districtId: string) => {
	const res = await fetch(
		`https://esgoo.net/api-tinhthanh/3/${districtId}.htm`,
	);
	const data = await res.json();
	if (data.error === 0) return data.data;
	throw new Error("Lỗi khi tải danh sách phường");
};
