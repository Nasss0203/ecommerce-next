import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";

const DialogAuth = ({ children }: { children: React.ReactNode }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className='w-[400px]'>
				<DialogHeader>
					<DialogTitle>add product</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when
						you're done.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default DialogAuth;
