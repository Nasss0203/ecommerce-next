// InputAddress.tsx
"use client";

import { fetchDistricts, fetchProvinces, fetchWards } from "@/api/region.api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface RegionOption {
	id: string;
	full_name: string;
}

interface InputAddressProps {
	onChange?: (address: {
		provinceId: string;
		provinceName: string;
		districtId: string;
		districtName: string;
		wardId: string;
		wardName: string;
	}) => void;
}

const InputAddress = ({ onChange }: InputAddressProps) => {
	const [selectedProvince, setSelectedProvince] =
		useState<RegionOption | null>(null);
	const [selectedDistrict, setSelectedDistrict] =
		useState<RegionOption | null>(null);
	const [selectedWard, setSelectedWard] = useState<RegionOption | null>(null);

	const { data: provinces } = useQuery({
		queryKey: ["provinces"],
		queryFn: fetchProvinces,
	});

	const { data: districts } = useQuery({
		queryKey: ["districts", selectedProvince?.id],
		queryFn: () => fetchDistricts(selectedProvince!.id),
		enabled: !!selectedProvince,
	});

	const { data: wards } = useQuery({
		queryKey: ["wards", selectedDistrict?.id],
		queryFn: () => fetchWards(selectedDistrict!.id),
		enabled: !!selectedDistrict,
	});

	useEffect(() => {
		if (selectedProvince && selectedDistrict && selectedWard && onChange) {
			onChange({
				provinceId: selectedProvince.id,
				provinceName: selectedProvince.full_name,
				districtId: selectedDistrict.id,
				districtName: selectedDistrict.full_name,
				wardId: selectedWard.id,
				wardName: selectedWard.full_name,
			});
		}
	}, [selectedProvince, selectedDistrict, selectedWard]);

	return (
		<div className='flex items-center gap-4 w-full'>
			{/* Tỉnh/Thành phố */}
			<div className='flex flex-col gap-2 flex-1'>
				<label>Thành phố</label>
				<select
					className='border rounded px-2 py-1'
					onChange={(e) => {
						const selected = provinces?.find(
							(p: any) => p.id === e.target.value,
						);
						if (selected) {
							setSelectedProvince(selected);
							setSelectedDistrict(null);
							setSelectedWard(null);
						}
					}}
					defaultValue=''
				>
					<option value='' disabled>
						Chọn tỉnh
					</option>
					{provinces?.map((item: any) => (
						<option key={item.id} value={item.id}>
							{item.full_name}
						</option>
					))}
				</select>
			</div>

			{/* Quận/Huyện */}
			<div className='flex flex-col gap-2 flex-1'>
				<label>Quận</label>
				<select
					className='border rounded px-2 py-1'
					onChange={(e) => {
						const selected = districts?.find(
							(d: any) => d.id === e.target.value,
						);
						if (selected) {
							setSelectedDistrict(selected);
							setSelectedWard(null);
						}
					}}
					disabled={!selectedProvince}
					defaultValue=''
				>
					<option value='' disabled>
						Chọn quận
					</option>
					{districts?.map((item: any) => (
						<option key={item.id} value={item.id}>
							{item.full_name}
						</option>
					))}
				</select>
			</div>

			{/* Phường/Xã */}
			<div className='flex flex-col gap-2 flex-1'>
				<label>Phường</label>
				<select
					className='border rounded px-2 py-1'
					onChange={(e) => {
						const selected = wards?.find(
							(w: any) => w.id === e.target.value,
						);
						if (selected) {
							setSelectedWard(selected);
						}
					}}
					disabled={!selectedDistrict}
					defaultValue=''
				>
					<option value='' disabled>
						Chọn phường
					</option>
					{wards?.map((item: any) => (
						<option key={item.id} value={item.id}>
							{item.full_name}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default InputAddress;
