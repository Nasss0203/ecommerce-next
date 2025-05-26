"use client";
import HeaderCart from "./header/HeaderCart";
import HeaderCategory from "./header/HeaderCategory";

const Header = () => {
	return (
		<header className='z-50 fixed w-full'>
			<div className='flex flex-col bg-white'>
				{/* <HeaderAuth></HeaderAuth>
				<hr /> */}
				<HeaderCart></HeaderCart>
				<HeaderCategory></HeaderCategory>
			</div>
		</header>
	);
};

export default Header;
