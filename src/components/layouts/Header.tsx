"use client";
import HeaderAuth from "./header/HeaderAuth";
import HeaderCart from "./header/HeaderCart";
import HeaderCategory from "./header/HeaderCategory";

const Header = () => {
	return (
		<header className='flex flex-col'>
			<HeaderAuth></HeaderAuth>
			<hr />
			<HeaderCart></HeaderCart>
			<HeaderCategory></HeaderCategory>
		</header>
	);
};

export default Header;
