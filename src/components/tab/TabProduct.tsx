import { Feedback } from "../card";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface ITabProduct {
	description?: string;
	title?: string;
}

const TabProduct = ({ description, title }: ITabProduct) => {
	return (
		<div className='w-full'>
			<hr />
			<Tabs defaultValue='descriptions' className='w-full'>
				<div className='flex justify-center border-b py-2 border-[#E5E5E5]'>
					<TabsList>
						<TabsTrigger value='descriptions' className='lg:w-36'>
							Mô tả
						</TabsTrigger>
						<TabsTrigger value='additional_information'>
							Thông tin sản phẩm
						</TabsTrigger>
						<TabsTrigger
							value='customer_feedback'
							className='lg:w-36'
						>
							Đánh giá
						</TabsTrigger>
					</TabsList>
				</div>
				<div className='flex w-full justify-between py-4'>
					<div className='py-4 lg:w-[50%]'>
						<TabsContent value='descriptions'>
							<div className='flex flex-col gap-5'>
								<div className='lg:line-clamp-[9] line-clamp-[4] h-[400px]'>
									<div
										className=''
										dangerouslySetInnerHTML={{
											__html: description as string,
										}}
									></div>
								</div>
								<div className='flex justify-center'>
									<Dialog>
										<DialogTrigger asChild>
											<Button variant='default'>
												Xem tất cả
											</Button>
										</DialogTrigger>
										<DialogContent className='h-screen  lg:max-w-7xl 2xl:max-w-[1436px]'>
											<DialogHeader>
												<DialogTitle>
													{title}
												</DialogTitle>
												<DialogDescription>
													{"  "}
												</DialogDescription>
											</DialogHeader>
											<ScrollArea className='h-[90vh] lg:px-10 '>
												<div className='w-full flex justify-center'>
													<div
														className='max-w-[1000px]'
														dangerouslySetInnerHTML={{
															__html: description as string,
														}}
													/>
												</div>
											</ScrollArea>
										</DialogContent>
									</Dialog>
								</div>
							</div>
						</TabsContent>
						<TabsContent value='additional_information'>
							additional_information
						</TabsContent>
						<TabsContent value='customer_feedback'>
							<div className='flex flex-col gap-5'>
								{Array(4)
									.fill(0)
									.map((item, index) => (
										<div key={index}>
											<Feedback key={index}></Feedback>
											<hr />
										</div>
									))}
								<div>Load more</div>
							</div>
						</TabsContent>
					</div>
				</div>
			</Tabs>
		</div>
	);
};

export default TabProduct;
