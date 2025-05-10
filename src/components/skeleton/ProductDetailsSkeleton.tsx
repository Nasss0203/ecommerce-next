import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const ProductDetailsSkeleton = () => {
	return (
		<section className='p-6 md:p-10 animate-pulse'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
				<Card className='p-6 flex items-center justify-center'>
					<Skeleton className='lg:h-[400px] lg:w-[400px] h-[200px] w-[200px] rounded-xl' />
				</Card>

				<div className='flex flex-col gap-4'>
					<Skeleton className='h-8 w-2/3' />
					<Skeleton className='h-4 w-1/4' />
					<div className='flex items-center gap-4'>
						<Skeleton className='h-6 w-24' />
						<Skeleton className='h-8 w-32' />
						<Skeleton className='h-6 w-16' />
					</div>
					<Skeleton className='h-4 w-1/3' />
					<Skeleton className='h-4 w-1/4' />
					<Skeleton className='h-20 w-full' />
					<div className='flex items-center gap-2'>
						<Skeleton className='h-10 w-10 rounded-full' />
						<Skeleton className='h-6 w-6' />
						<Skeleton className='h-10 w-10 rounded-full' />
					</div>
					<Skeleton className='h-12 w-full rounded-lg' />{" "}
				</div>
			</div>

			<div className='mt-10 space-y-4'>
				<div className='flex gap-4'>
					<Skeleton className='h-8 w-32 rounded-md' />
					<Skeleton className='h-8 w-48 rounded-md' />
					<Skeleton className='h-8 w-40 rounded-md' />
				</div>
				<Skeleton className='h-24 w-full rounded-md' />
			</div>
		</section>
	);
};

export default ProductDetailsSkeleton;
