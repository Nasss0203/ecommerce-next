"use client";
import Image from "next/image";
import { useState } from "react";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface SlideDetailProps {
	images: string[];
}

const SlideDetail = ({ images }: SlideDetailProps) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<>
			<div className=' border border-neutral-200 rounded-lg'>
				<Swiper
					spaceBetween={5}
					navigation={true}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[FreeMode, Navigation, Thumbs]}
					className='mySwiper2'
				>
					{images.map((src, index) => (
						<SwiperSlide key={index}>
							<div className='w-full flex justify-center items-center py-3'>
								<Image
									height={400}
									width={500}
									src={src}
									alt={`product-image-${index}`}
									className='w-auto max-w-full h-auto max-h-[360px] object-contain rounded-lg'
									unoptimized
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<Swiper
				onSwiper={setThumbsSwiper as any}
				spaceBetween={5}
				slidesPerView={6}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className='mySwiper mt-3'
			>
				{images.map((src, index) => (
					<SwiperSlide key={index}>
						<Image
							height={50}
							width={50}
							src={src}
							alt={`thumb-${index}`}
							className='w-auto max-w-full h-auto object-cover rounded-md border'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default SlideDetail;
