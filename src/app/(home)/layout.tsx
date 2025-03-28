import { LayoutMain } from "@/components/layouts";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return <LayoutMain>{children}</LayoutMain>;
};

export default layout;
