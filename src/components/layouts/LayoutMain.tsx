import QueryProvider from "@/app/query-provider";
import { Footer, Header } from "@/components/layouts";
import { breakpoints } from "@/constants";
import { ReactNode } from "react";

const LayoutMain = ({ children }: { children: ReactNode }) => {
	return (
		<QueryProvider>
			<div className='flex flex-col'>
				<Header></Header>
				<div className={`${breakpoints} py-5`}>{children}</div>
				<Footer></Footer>
			</div>
		</QueryProvider>
	);
};

export default LayoutMain;
