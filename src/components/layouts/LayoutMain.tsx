import { Footer, Header } from "@/components/layouts";
import { breakpoints } from "@/constant";
import { ReactNode } from "react";

const LayoutMain = ({ children }: { children: ReactNode }) => {
	return (
		<div className='flex flex-col'>
			<Header></Header>
			<div className={`${breakpoints} py-5`}>{children}</div>
			<Footer></Footer>
		</div>
	);
};

export default LayoutMain;
